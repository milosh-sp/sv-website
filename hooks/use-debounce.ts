/**
 * Custom hook for debouncing values and callbacks
 */

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Debounce a value - returns the debounced value after the specified delay
 */
export function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

/**
 * Debounce a callback function - returns a debounced version of the callback
 * @template TArgs - Tuple type of callback arguments
 * @template TReturn - Return type of the callback
 */
export function useDebouncedCallback<
	TArgs extends readonly unknown[],
	TReturn = void,
>(
	callback: (...args: TArgs) => TReturn,
	delay: number,
): (...args: TArgs) => void {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const callbackRef = useRef(callback);

	// Keep callback ref up to date
	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const debouncedCallback = useCallback(
		(...args: TArgs) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				callbackRef.current(...args);
			}, delay);
		},
		[delay],
	);

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return debouncedCallback;
}

/**
 * Utility function for creating debounced functions outside of React components
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
	func: T,
	delay: number,
): T {
	let timeoutId: NodeJS.Timeout;

	return ((...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	}) as T;
}
