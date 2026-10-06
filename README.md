# CV YAM — Legal & Account Information Portal

Official public-facing legal and privacy portal for **CV YAM**, a South African AI-powered CV builder.

This portal provides complete, accessible, and POPIA-compliant documentation for the CV YAM mobile (Android) and web applications:

* **Privacy Policy** (`/privacy`) — Complete 26 sections covering data collection, remote cloud storage (Cloud Firestore), OpenAI features, advertising (Google AdMob), POPIA rights, and Information Regulator contact info.
* **Terms & Conditions** (`/terms`) — Complete 23 sections governing service usage, acceptable use, AI-assisted content verification, disclaimers, and South African governing law.
* **Account Terms** (`/account-terms`) — Authentication (Firebase Auth), remote CV cloud backup, synchronization, account deletion, and user responsibilities.
* **Contact & Privacy Requests** (`/contact`) — Dedicated channels for Account Support, POPIA Data Subject Requests, and General Product Feedback.
* **Reusable Legal Consent Component** (`src/components/ConsentNotice.tsx`) — Spec and interactive component for Android/web registration flows.

---

## Tech Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite 8
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React
* **Typography:** Plus Jakarta Sans & JetBrains Mono

---

## Prerequisites

* **Node.js:** v18.0.0 or later (v20+ recommended)
* **npm:** v9.0.0 or later (or yarn / pnpm)

---

## Getting Started

### 1. Install Dependencies

Clone the repository and install all required packages:

```bash
npm install
```

> **Tip:** If you encounter any peer dependency resolution warnings with older npm versions or existing lockfiles, you can run:
> ```bash
> npm install --legacy-peer-deps
> ```

### 2. Run the Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will start on:

```text
http://localhost:3000
```

> **Note:** The server binds to `--port=3000 --host=0.0.0.0` for full local and containerized access.

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### 4. Preview the Production Build

To locally test the production build:

```bash
npm run preview
```

### 5. Type Checking and Linting

To validate TypeScript types and catch any syntax or compilation errors:

```bash
npm run lint
```

---

## Available Routes

| Route | Description |
|---|---|
| `/` or `/legal` | Legal Portal Hub & Overview + Consent Component Spec |
| `/privacy` | Full Privacy Policy (26 sections + POPIA compliance) |
| `/terms` | Terms & Conditions (23 sections + SA governing law) |
| `/account-terms` | Account & Authentication Terms |
| `/contact` | Support, Email Assistance & POPIA Request Generator |

> Both path-based URLs (`/privacy`) and hash-based URLs (`/#privacy`) are supported.

---

## Key Configurations

* **Legal Metadata:** Central dates and contact details are managed in `src/data/legalMeta.ts`:
  * **Effective Date:** 6 October 2026
  * **Last Updated:** 6 October 2026
  * **Official Email:** `cvbuilderapp.sa@gmail.com`
  * **Regulator:** The Information Regulator (South Africa)

---

## Project Structure

```text
├── index.html                     # HTML entry point with SEO metadata
├── metadata.json                  # Application metadata & capabilities
├── package.json                   # Dependencies & npm scripts
├── tsconfig.json                  # TypeScript compiler settings
├── vite.config.ts                 # Vite bundler configuration
└── src/
    ├── main.tsx                   # React root entry point
    ├── index.css                  # Tailwind CSS theme & print styles
    ├── App.tsx                    # Client-side router & dynamic SEO controller
    ├── data/
    │   ├── legalMeta.ts           # Central legal dates, contacts & architecture
    │   ├── privacyPolicyData.ts   # 26 Privacy Policy sections
    │   ├── termsData.ts           # 23 Terms & Conditions sections
    │   └── accountTermsData.ts    # Account Terms sections
    ├── components/
    │   ├── LegalLayout.tsx        # Common shell with branding banner
    │   ├── LegalHeader.tsx        # Responsive desktop & mobile header
    │   ├── LegalFooter.tsx        # Official brand footer with copyright
    │   ├── LegalDocumentHeader.tsx# Header with search, print & share controls
    │   ├── LegalTableOfContents.tsx# Sticky desktop table of contents
    │   ├── MobileLegalNavigation.tsx # Dropdown navigation for mobile
    │   ├── LegalSection.tsx       # Section renderer with keyword highlighting
    │   ├── ContactCard.tsx        # Support & POPIA channel cards
    │   └── ConsentNotice.tsx      # Reusable legal consent checkbox
    └── pages/
        ├── HomePage.tsx           # Legal hub landing page & component showcase
        ├── PrivacyPage.tsx        # Privacy policy page
        ├── TermsPage.tsx          # Terms & conditions page
        ├── AccountTermsPage.tsx   # Account terms page
        └── ContactPage.tsx        # Contact & POPIA request generator page
```

---

## License

Copyright © 2026 CV YAM. All rights reserved.
Operating in the Republic of South Africa.
