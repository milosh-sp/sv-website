"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useSignupModal } from "@/contexts/signup-modal-context";
import { getUserSegmentLabel } from "@/types/form-data";
import { submitForm, mapUserTypeToApiFormat } from "@/lib/api";
import { useHoneypot } from "@/hooks/use-honeypot";
import {
	validateEmail,
	validateLinkedIn,
	validateSignupForm,
} from "@/lib/validation";
import { cn } from "@/lib/utils";
import { useDebouncedCallback } from "@/hooks/use-debounce";
import { strings } from "@/lib/strings";

/**
 * Interface for form field errors
 */
interface FormErrors {
	[key: string]: string;
}

/**
 * Type for submit status states
 */
type SubmitStatus = "idle" | "success" | "error";

/**
 * SignupModal Component
 *
 * Handles user signup with email and LinkedIn validation.
 * Implements honeypot bot detection and accessibility features.
 */
export function SignupModal() {
	const { isOpen, userType, closeModal } = useSignupModal();
	const [formData, setFormData] = useState({
		email: "",
		linkedin: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
	const firstInputRef = useRef<HTMLInputElement>(null);

	// Honeypot bot detection
	const { honeypotValue, setHoneypotValue, validateSubmission, resetHoneypot } =
		useHoneypot();

	// Track form start time for server-side validation
	const [formStartTime] = useState(() => new Date().toISOString());

	// Focus management for accessibility and honeypot reset
	useEffect(() => {
		if (isOpen && firstInputRef.current) {
			// Small delay to ensure modal is fully rendered
			const timer = setTimeout(() => {
				firstInputRef.current?.focus();
			}, 100);
			return () => clearTimeout(timer);
		}

		if (!isOpen) {
			// Reset honeypot when modal closes
			resetHoneypot();
		}

		return undefined;
	}, [isOpen, resetHoneypot]);

	// Keyboard event handling for accessibility
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isOpen) {
				closeModal();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, closeModal]);

	// Validate individual field and update errors (non-debounced version for immediate use)
	const validateFieldImmediate = (
		fieldName: "email" | "linkedin",
		value: string,
	) => {
		let validation:
			| ReturnType<typeof validateEmail>
			| ReturnType<typeof validateLinkedIn>;

		if (fieldName === "email") {
			validation = validateEmail(value);
		} else {
			validation = validateLinkedIn(value);
		}

		setErrors((prev) => ({
			...prev,
			[fieldName]: validation.isValid
				? ""
				: validation.message || "Invalid input",
		}));
	};

	// Debounced version for real-time validation during typing
	const debouncedValidateField = useDebouncedCallback(
		validateFieldImmediate,
		600,
	);

	const validateForm = () => {
		const newErrors: FormErrors = {};

		// Honeypot validation using the hook
		const honeypotValidation = validateSubmission();
		if (!honeypotValidation.isValid) {
			// eslint-disable-next-line no-console
			console.log("Bot detected:", honeypotValidation.reason);
			newErrors.honeypot = "Invalid submission detected";
			setErrors(newErrors);
			return false;
		}

		// Use centralized validation
		const formValidation = validateSignupForm(formData);
		if (!formValidation.isValid) {
			Object.assign(newErrors, formValidation.errors);
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitStatus("idle");

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setErrors({});

		try {
			// Submit to Netlify function
			const result = await submitForm({
				email: formData.email,
				fields: {
					linkedin: formData.linkedin,
					user_type: mapUserTypeToApiFormat(userType),
					source: "signup-modal",
					website: honeypotValue, // Include honeypot field
					form_start_time: formStartTime, // Include timing for server validation
				},
			});

			if (result.success) {
				setSubmitStatus("success");
				setFormData({ email: "", linkedin: "" });
				resetHoneypot(); // Reset honeypot state

				// Store in localStorage as backup
				const submissions = JSON.parse(
					localStorage.getItem("waitlist-submissions") || "[]",
				) as unknown[];
				submissions.push({
					...formData,
					userType,
					timestamp: new Date().toISOString(),
					source: "signup-modal",
				});
				localStorage.setItem(
					"waitlist-submissions",
					JSON.stringify(submissions),
				);

				// Close modal after successful submission
				setTimeout(() => {
					closeModal();
					setSubmitStatus("idle");
				}, 2000);
			} else {
				// eslint-disable-next-line no-console
				console.error("Form submission failed:", result.error);
				setSubmitStatus("error");
				// Set specific error message if available
				if (result.error) {
					setErrors({ submit: result.error });
				}
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error("Form submission error:", error);
			setSubmitStatus("error");
			setErrors({
				submit: "An unexpected error occurred. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, email: value }));

		// Clear error immediately when user starts typing
		if (errors.email) {
			setErrors((prev) => ({ ...prev, email: "" }));
		}

		// Trigger debounced validation
		debouncedValidateField("email", value);
	};

	const handleLinkedInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, linkedin: value }));

		// Clear error immediately when user starts typing
		if (errors.linkedin) {
			setErrors((prev) => ({ ...prev, linkedin: "" }));
		}

		// Trigger debounced validation
		debouncedValidateField("linkedin", value);
	};

	const handleHoneypotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setHoneypotValue(e.target.value);
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
			<DialogContent className="max-w-md" showCloseButton={false}>
				<DialogHeader className="relative">
					<button
						type="button"
						onClick={closeModal}
						className="absolute top-0 right-0 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
						aria-label={strings.signupModal.accessibility.closeModal}
					>
						<X className="h-4 w-4" />
					</button>
					<DialogTitle className="text-2xl font-bold text-slate-900 text-center mb-2 pr-12">
						{strings.signupModal.title}
					</DialogTitle>
					{userType && (
						<p className="text-sm text-blue-600 text-center mb-4 font-medium">
							{getUserSegmentLabel(userType)}
						</p>
					)}
				</DialogHeader>

				<form
					onSubmit={handleSubmit}
					className="space-y-4"
					aria-label="Signup form"
				>
					<div className="space-y-2">
						<label htmlFor="email" className="sr-only">
							{strings.signupModal.form.email.label}
						</label>
						<Input
							ref={firstInputRef}
							id="email"
							type="email"
							placeholder={strings.signupModal.form.email.placeholder}
							value={formData.email}
							onChange={handleEmailChange}
							required
							disabled={isSubmitting}
							className={cn(
								"h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50",
								errors.email &&
									"border-destructive focus:border-destructive focus:ring-destructive/20",
							)}
							aria-describedby={strings.signupModal.accessibility.emailError}
							aria-invalid={!!errors.email}
						/>
						{errors.email && (
							<p
								id="email-error"
								className="text-destructive text-sm mt-2 flex items-start gap-2 px-1"
								role="alert"
								aria-live="polite"
							>
								<span
									className="text-destructive font-medium text-xs mt-0.5"
									aria-hidden="true"
								>
									⚠
								</span>
								<span className="leading-relaxed">{errors.email}</span>
							</p>
						)}
					</div>

					{/* Honeypot field - hidden from users but visible to bots */}
					<div
						className="absolute left-[-9999px] opacity-0 pointer-events-none"
						aria-hidden="true"
					>
						<label htmlFor="website">
							{strings.signupModal.form.website.label}
						</label>
						<Input
							id="website"
							name="website"
							type="text"
							placeholder={strings.signupModal.form.website.placeholder}
							value={honeypotValue}
							onChange={handleHoneypotChange}
							tabIndex={-1}
							autoComplete="off"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="linkedin" className="sr-only">
							{strings.signupModal.form.linkedin.label}
						</label>
						<Input
							id="linkedin"
							type="url"
							placeholder={strings.signupModal.form.linkedin.placeholder}
							value={formData.linkedin}
							onChange={handleLinkedInChange}
							required
							disabled={isSubmitting}
							className={cn(
								"h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50",
								errors.linkedin &&
									"border-destructive focus:border-destructive focus:ring-destructive/20",
							)}
							aria-describedby={strings.signupModal.accessibility.linkedinError}
							aria-invalid={!!errors.linkedin}
						/>
						{errors.linkedin && (
							<p
								id="linkedin-error"
								className="text-destructive text-sm mt-2 flex items-start gap-2 px-1"
								role="alert"
								aria-live="polite"
							>
								<span
									className="text-destructive font-medium text-xs mt-0.5"
									aria-hidden="true"
								>
									⚠
								</span>
								<span className="leading-relaxed">{errors.linkedin}</span>
							</p>
						)}
					</div>

					<Button
						type="submit"
						disabled={isSubmitting || !formData.email || !formData.linkedin}
						className="w-full h-12 text-base btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
						aria-label={
							isSubmitting
								? strings.signupModal.submitButton.ariaLabel.submitting
								: strings.signupModal.submitButton.ariaLabel.idle
						}
					>
						{isSubmitting ? (
							<>
								<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
								{strings.signupModal.submitButton.submitting}
							</>
						) : (
							strings.signupModal.submitButton.idle
						)}
					</Button>

					{submitStatus === "success" && (
						<section
							className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
							aria-live="polite"
						>
							<p className="text-green-800 text-sm font-medium flex items-start gap-2">
								<span className="text-green-600" aria-hidden="true">
									{strings.signupModal.status.success.icon}
								</span>
								<span>{strings.signupModal.status.success.message}</span>
							</p>
						</section>
					)}

					{submitStatus === "error" && (
						<div
							className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
							role="alert"
							aria-live="assertive"
						>
							<p className="text-red-800 text-sm font-medium flex items-start gap-2">
								<span className="text-red-600" aria-hidden="true">
									{strings.signupModal.status.error.icon}
								</span>
								<span>
									{errors.submit || strings.signupModal.status.error.message}
								</span>
							</p>
						</div>
					)}
				</form>
			</DialogContent>
		</Dialog>
	);
}
