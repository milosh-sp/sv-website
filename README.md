<div align="center">
  <a href="https://skillverdict.com">
    <img src="public/logo-sv.svg" alt="Skill Verdict" width="120" />
  </a>

  <h1>Skill Verdict</h1>

  <p><strong>Hire with evidence.</strong></p>

  <p>Skill Verdict is peer-vetted hiring. Every candidate's skills and personality are assessed by senior engineers who do the work themselves — stricter than a screening call, and sourced from real peers instead of self-reported claims. Paste a job description and meet a shortlist of talent that has already been interviewed.</p>

  <p>
    <a href="https://skillverdict.com/hiring-manager"><strong>Hire vetted talent</strong></a>
    ·
    <a href="https://skillverdict.com/for-talent-cv2.0"><strong>For talent CV2.0</strong></a>
  </p>
</div>

---

## Table of contents

- [The problem](#the-problem)
- [How it works](#how-it-works)
- [What this site does](#what-this-site-does)
- [What you get](#what-you-get)
  - [For hiring teams](#for-hiring-teams)
  - [For candidates](#for-candidates)
  - [For expert reviewers](#for-expert-reviewers)
- [Stack](#stack)

## The problem

Hiring still runs on claims, not evidence. Candidates are asked to assert which technologies they know, how senior they are, and what they can deliver — and nobody checks. Hiring teams are left guessing from keyword-heavy CVs, inconsistent titles, and short, subjective interviews, so they fall back on proxies like pedigree and re-run the same technical screens every candidate has already passed somewhere else.

Strong engineers lose out. Good work stays hidden behind a weak CV, and great builders are often not great self-promoters, so real ability never gets seen before the filter drops.

Skill Verdict adds the missing layer: independent, peer-reviewed proof of ability, attached to a live profile the candidate owns and can share anywhere.

## How it works

1. **Create an account and upload your CV** — it becomes a CV2.0 in seconds: a live page you own and can share anywhere.
2. **Pick what to verify** — skills, identity, or work experience.
3. **Prove your ability** — complete real-world work and discuss it with a senior reviewer. Reviews are anonymous, so the work is judged, not the name, background, or location.
4. **Get your verdict** — pass, and a badge lands on your CV2.0 that you can show or hide.

On the hiring side, paste a job description and AI surfaces already peer-vetted candidates ranked by skills and personality fit. AI does the searching; humans do the vetting.

## What this site does

This repository is the **Skill Verdict marketing and waitlist site** — a statically exported Next.js app, with no product backend, database, or authentication.

- **Company homepage** (`/`) — hero, stats band (61% lower cost vs traditional hiring, 5 minutes to a shortlist, 100% human-first vetting), smart AI search preview, differentiators, personality-based hiring, and a hiring FAQ.
- **Talent page** (`/for-talent-cv2.0`) — CV2.0 preview, the candidate and reviewer process, benefits, and a talent FAQ.
- **Waitlists** — four-step forms at `/candidate`, `/verifier`, and `/hiring-manager`, submitted through Netlify functions to Sender.net.
- **Supporting routes** — `/contact`, `/explainer-video`, `/confirm-email`, and `/privacy-policy`.

All user-facing copy lives in [`lib/strings.ts`](lib/strings.ts), and section order is driven by [`lib/navigationData.ts`](lib/navigationData.ts) — reordering entries there reorders the page.

## What you get

### For hiring teams

Paste a job description and get a shortlist of engineers who have already been interviewed, not just sourced. Every CV2.0 shows peer-vetted skills, real work, and reviewer evidence up front, plus a work-style read on communication, collaboration, and decision-making — so you hire for the role and the team. Hire an individual or a pre-formed squad with complementary skills, anywhere in the world, at up to 58% less than local hiring.

### For candidates

Get interviewed once, prove what you can do, then let the right remote companies come to you. Your CV2.0 is a live page you own: verified skill badges with linked reviewer evidence, a verification history reachable by link or QR code, and full control over which badges are public. Companies reach out when your vetted skills match a role, so you skip the application grind.

### For expert reviewers

Assess real engineering work remotely, on your own schedule, with no minimum commitment. Candidate identities are withheld, so you judge the work alone. You get paid per completed assessment and build visible credibility through the reviews you sign off.

## Stack

| Layer | Choice |
|---|---|
| Meta-framework | [Next.js 16](https://nextjs.org/docs) App Router, static export to `out/` |
| UI | [React 19](https://react.dev/) (React Compiler) |
| Language | [TypeScript 5.9](https://www.typescriptlang.org/docs/) (`strict`) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), `cn()` via [`clsx`](https://github.com/lukeed/clsx) + [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) |
| Icons / carousel / video | [lucide-react](https://lucide.dev/), [Embla](https://www.embla-carousel.com/), [next-video](https://next-video.dev/) |
| Forms backend | [Netlify Functions](https://docs.netlify.com/functions/overview/) → [Sender.net](https://www.sender.net/) |
| Analytics | [Mixpanel](https://docs.mixpanel.com/) (Cookiebot-gated), Meta Pixel |
| Lint / format | [Biome 2](https://biomejs.dev/) |
| Deploy | [Netlify](https://docs.netlify.com/) (`out/` + `netlify/functions`) |

This is the stack of the marketing site only — the product application is a separate codebase.

Setup, environment, and command reference live in [AGENTS.md](AGENTS.md).

---

<div align="center">
  <p><strong>Don't chase. Attract.</strong></p>
  <p><a href="https://skillverdict.com">skillverdict.com</a></p>
  <p><sub>Copyright © Skill Verdict. All rights reserved. This software is proprietary and confidential.</sub></p>
</div>
