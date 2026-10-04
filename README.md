# SwiftWash — Laundry Pickup & Delivery Website

> **Clean clothes. Less stress. We pick up, wash, fold, and deliver.**

SwiftWash is a modern, responsive, frontend-only web application built for a fictional laundry pickup and delivery startup based in **Ibadan, Nigeria** (serving Bodija, Jericho, University of Ibadan, Oluyole, Ring Road, Akobo, and nearby areas).

The website is crafted with a clean, trustworthy blue-and-slate visual identity, featuring transparent per-kilogram and per-item pricing, an interactive cost estimator, a 4-step workflow, customer stories, an accessible FAQ accordion, and an interactive pickup booking form with client-side validation.

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Prerequisites & Dependencies](#2-prerequisites--dependencies)
3. [Running the Application Locally](#3-running-the-application-locally)
4. [Creating a Production Build](#4-creating-a-production-build)
5. [Deploying to Netlify](#5-deploying-to-netlify)
6. [Demo-Only Features & Clarifications](#6-demo-only-features--clarifications)
7. [Connecting to a Real Backend (Future Roadmap)](#7-connecting-to-a-real-backend-future-roadmap)
8. [Project Structure](#8-project-structure)

---

## 1. Project Overview

SwiftWash provides a complete customer-facing digital experience:
- **Navigation & Brand:** Sticky top bar with clean wordmark, desktop & mobile menus, and fast booking CTA.
- **Hero Section:** Clear value proposition, trust proof points, and real photography assets.
- **Service Catalog:** 6 garment care categories (Wash & Fold, Dry Cleaning, Steam Ironing & Pressing, Bedding & Duvets, Express 24h, and Corporate Accounts) with an interactive "Learn More" modal.
- **Pricing & Interactive Estimator:** Transparent rates in Nigerian Naira (₦) with a live slider calculator based on clothing weight.
- **How It Works:** 4-step visual timeline (Book $\rightarrow$ We Pick Up $\rightarrow$ We Clean $\rightarrow$ We Deliver).
- **Value Proposition:** 6 core benefits explaining fabric care, scheduling flexibility, and honest pricing.
- **Customer Stories:** Fictional personas (remote worker, doctor, university student, business owner).
- **Interactive Booking Form:** Form validation for full name, Nigerian phone format, email, Ibadan pickup address, date selection, time slot, service category, and special laundry notes.
- **FAQ Accordion:** 8 accessible accordion items answering customer questions.
- **Contact & Inquiries:** Operational hours, Ibadan service zones, phone/email placeholders, and contact message form with simulated instant feedback.

---

## 2. Prerequisites & Dependencies

- **Node.js:** v18.0.0 or higher
- **Package Manager:** `npm` (v9+) or `yarn` / `pnpm`

### Core Technologies Used:
- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 3. Running the Application Locally

1. Clone or extract the project repository to your computer:
   ```bash
   cd swiftwash
   ```

2. Install all project dependencies:
   ```bash
   npm install
   ```

3. Start the local Vite development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```
   *(or the port indicated in your terminal)*.

---

## 4. Creating a Production Build

To test or compile the optimized static assets:

```bash
npm run build
```

This compiles TypeScript and bundles HTML, CSS, JavaScript, and images into the `/dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

## 5. Deploying to Netlify

This project is 100% static, requires no server runtime, and is pre-configured for seamless deployment to **Netlify**.

### Option A: Drag-and-Drop (Netlify Drop)
1. Run `npm run build` on your computer.
2. Log in to [app.netlify.com](https://app.netlify.com).
3. Navigate to **Sites** $\rightarrow$ drag and drop the generated `dist` folder into the Netlify Drop area.
4. Your website will be live in seconds with a free `.netlify.app` URL and SSL certificate.

### Option B: Git Repository Deployment (Continuous Deployment)
1. Push this codebase to a GitHub, GitLab, or Bitbucket repository.
2. In Netlify, click **"Add new site"** $\rightarrow$ **"Import an existing project"**.
3. Choose your repository and configure the build settings:
   - **Base directory:** *(leave empty or `./`)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**. Netlify will automatically build and publish any commits pushed to your branch.

*Note: The project includes `public/_redirects` with `/* /index.html 200` to ensure direct page refreshes work properly.*

---

## 6. Demo-Only Features & Clarifications

This application is a **frontend concept prototype** created for demonstration purposes:
- **No Database Persistence:** Booking and contact submissions are validated on the client side only; data is displayed in an instant confirmation view and is never sent over the network.
- **No Payment Gateway:** No credit card, bank account, or Paystack/Flutterwave API keys are required. Payment options (Transfer/POS) are described for informational clarity.
- **Fictional Company & Data:** "SwiftWash" is a prototype brand; contact numbers and testimonials represent realistic fictional examples.

---

## 7. Connecting to a Real Backend (Future Roadmap)

To convert this frontend into a full production startup application, you could integrate:

1. **API Endpoints (`/api/bookings`, `/api/contact`):**
   - Connect the `BookingSection` submission handler (`handleSubmit`) to a Node.js/Express, Next.js, or serverless cloud function (e.g., Supabase / Firebase / Cloud Functions).
2. **Database Storage (PostgreSQL / MongoDB / Firestore):**
   - Store customer profiles, addresses, pickup slots, and order status (`Pending Pickup`, `In Wash`, `Ironing`, `Dispatched`, `Delivered`).
3. **SMS & WhatsApp Gateway (e.g., Termii or Twilio):**
   - Trigger automated dispatch notifications and driver arrival alerts to the customer's Nigerian mobile number.
4. **Payment Gateway (e.g., Paystack / Flutterwave):**
   - Generate automated invoices with payment links sent to the customer upon weighing the laundry at collection.
5. **Rider Mobile App / Dashboard:**
   - Allow couriers to view daily routes in Ibadan, update bag weights, and capture delivery signatures.

---

## 8. Project Structure

```
swiftwash/
├── public/
│   └── _redirects              # Netlify SPA redirect rules
├── src/
│   ├── assets/
│   │   └── images/             # Generated high-resolution photography assets
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive header & mobile navigation
│   │   ├── Hero.tsx            # Hero value proposition & visual banner
│   │   ├── Stats.tsx           # Quick trust metrics & performance proof
│   │   ├── Services.tsx        # 6 garment care cards & fabric highlight
│   │   ├── ServiceModal.tsx    # Accessible modal dialog for service specs
│   │   ├── Pricing.tsx         # Pricing table & interactive weight calculator
│   │   ├── HowItWorks.tsx      # 4-step illustrated workflow
│   │   ├── WhyChooseUs.tsx     # 6 core customer benefits
│   │   ├── Testimonials.tsx    # Customer feedback cards
│   │   ├── BookingSection.tsx  # Pickup scheduling form with validation
│   │   ├── FAQ.tsx             # 8-question accessible accordion
│   │   ├── ContactSection.tsx  # Contact info, service hours & message form
│   │   └── Footer.tsx          # Brand footer, site links & demo disclaimer
│   ├── data/
│   │   └── mockData.ts         # Structured data for services, FAQs, etc.
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces & domain models
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind CSS imports & font variables
│   └── main.tsx                # React DOM entry point
├── index.html                  # HTML entry with metadata and Google Fonts
├── metadata.json               # Applet metadata
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## License
MIT License. Built for demonstration and prototyping purposes.
