# SYSTEM ROLE & ARCHITECTURAL OBJECTIVE
You are an expert Senior Frontend Engineer, Creative Director, and UI/UX Architect specializing in modern, highly responsive web applications. Your objective is to design and develop a production-ready, interactive showcase web application for "KIDSLAND" ("Tomorrow's World"), based on the physical storefront and branding details provided in the reference file "6179464337374776855.jpg".

The web application is strictly a digital showroom and brand promotion platform. **NO e-commerce checkout or payment gateway integration is required**. 

CRITICAL REQUIREMENT: The primary and almost exclusive method of customer conversion and contact must be WhatsApp. The entire user journey must be optimized to push users to initiate a WhatsApp conversation with pre-filled context regarding the items they are looking at.

---

# BRAND IDENTITY & DESIGN SYSTEM (FROM "6179464337374776855.jpg")
The visual identity must match the bright, modern, and trustworthy feel of the physical building and banner depicted in "6179464337374776855.jpg":
- **Primary Name:** KIDSLAND
- **Tagline:** Tomorrow's World
- **Color Palette:** 
  - Primary: Deep royal blue (#0D47A1 or matching the prominent 'KIDSLAND' text)
  - Secondary: Crisp sky blue accents and clean white spaces
  - Conversion Accent: WhatsApp Green (#25D366) strictly reserved for primary call-to-action buttons.
  - Accents: Multi-color playful indicators (Red, Green, Yellow, Orange) mirroring the small icons on the physical storefront sign.
- **Typography:** Bold, rounded, premium-feeling sans-serif headers for a kid-friendly yet high-end look, paired with highly legible body text.
- **Vibe:** Clean, multi-story digital showroom vibe, representing the impressive 2-story physical store structure shown in "store.jpg".

---

# THE WHATSAPP CONVERSION ENGINE & CONTACT DATA
All communication anchors must utilize the real-world contact data verified from "6179464337374776855.jpg". The system must dynamically generate `wa.me` links.
- **Physical Address:** Main Street, Eravur
- **Primary WhatsApp API Number:** 
  - +94761492555 (Base URL: https://wa.me/94761492555)
- **Secondary Reference Numbers (For Footer Display only):** 
  - 0776474410, 0775708134
- **Floating WhatsApp Widget:** A persistent, pulsing WhatsApp icon must remain fixed at the bottom right of the screen across all devices, acting as a global quick-chat function.

---

# CORE PRODUCT CATALOG SEGMENTATION
The web app must dynamically categorize and feature the specific product lines highlighted on the banner of "6179464337374776855.jpg":
1. **Tricycles & Ride-ons** (Include premium items like the realistic ride-on Mercedes SUV and sports motorcycle shown in the banner)
2. **Baby Clothes** (Comfortable, high-quality modern apparel for newborns to toddlers)
3. **Soft Toys** (Plush, safe, and premium stuffed companions)
4. **New Baby Gifts** (Curated, unique gift hampers and box sets for baby showers and celebrations)
5. **Educative Toys** (Brain-development games, puzzles, and interactive learning gear)
6. **Baby Essentials** (Cots/cribs, walkers, high-end strollers, and baby care hardware as illustrated in the banner)
7. **Kids Toys** (Action figures, creative playsets, and outdoor toys)

---

# REQUISITE UI/UX MODULES & VIEWS

## 1. Sticky Navigation & Header
- Left side: High-contrast "KIDSLAND" typography with "Tomorrow's World" sub-text.
- Center/Right: Quick links to Product Categories, Virtual Showroom, and Guided Gift Finder.
- Action Button: A prominent, WhatsApp-green button reading "Chat on WhatsApp", linked directly to the API.

## 2. Hero Section (Digital Showroom Entry)
- A striking background layout blending sleek blue geometric patterns with high-quality illustrations of premium items (Ride-on jeep, premium crib, modern stroller, kid's sports bike) as composed in "6179464337374776855.jpg".
- Clear value proposition text: "Discover Tomorrow's World Today – Eravur's Premier 2-Story Destination for Premium Toys & Baby Essentials."
- Double Call-to-Action: [Explore Collection] and [WhatsApp Inquiry].

## 3. The "Interactive Age & Gift Guide" (WhatsApp Funnel)
To make the application interactive and engaging, build a multi-step guided questionnaire element:
- **Step 1: Choose the Occasion/Need** -> Options: "Birthday Gift", "Newborn Essentials", "Educational Development", "Ride-on Fun".
- **Step 2: Select Age Group** -> Options: "Infant (0-12 Months)", "Toddler (1-3 Years)", "Preschooler (3-5 Years)", "Big Kids (5+ Years)".
- **Step 3: Dynamic Recommendation Display & WhatsApp Routing** -> 
  - The interface populates a dynamic layout showcasing 3-4 "Unique Spotlight Products" matching the criteria. 
  - **CRITICAL:** The action button on these specific results must say "Check Availability on WhatsApp". 
  - The JavaScript must capture the user's selections and dynamically encode a WhatsApp URL. Example output text: *"Hi Kidsland! I used your Gift Guide. I am looking for a Birthday Gift for a Toddler (1-3 Years). Could you show me what you have in stock?"*

## 4. Visual "Unique Product Showcase" Grid
- A tabbed gallery filtering across the 7 major categories.
- Instead of simple pricing grids, each item features a "Detail Card":
  - Highlighted Badges: "Unique Collection" or "Store Exclusive".
  - Key Details Section: Material safety info, age suitability, and specialized features.
- **Product-Specific WhatsApp CTA:** Every single product card must have an "Inquire Now" button featuring the WhatsApp logo. When clicked, it must send a pre-filled message: *"Hi Kidsland, I am inquiring about the [Insert Product Name] I saw on your website. Is it currently available?"*

## 5. Store Promotion & Trust Section
- A dedicated banner displaying the storefront layout visible in "store.jpg".
- Text highlighting: "Visit us at Main Street, Eravur to explore two entire floors dedicated to your child's happiness. Or send us a message on WhatsApp for instant assistance."
- Embedded interactive Google Map placeholder pointing to Main Street, Eravur.

## 6. Layout-Rich Footer
- Comprehensive layout mapping out all 4 phone numbers from the storefront image, emphasizing the primary WhatsApp number.
- Operational hours display.
- Direct links for driving directions.

---

# TECHNICAL REQUIREMENTS & CODE QUALITY STANDARDS

- **Framework & Language:** Pure, semantic HTML5, modern CSS3 (utilizing custom variables, flexbox, and CSS grid), and vanilla ES6+ JavaScript for fast execution without bloated framework dependencies.
- **WhatsApp API Encoding Logic:** The JavaScript file must contain a robust utility function specifically for encoding spaces and special characters into the `wa.me` URL string (e.g., replacing spaces with `%20`) to ensure messages format perfectly on the user's WhatsApp application.
- **Responsiveness Matrix:** 
  - Mobile (320px - 480px): Optimized single-column flows. The floating WhatsApp widget must be highly prominent but not obstruct core content.
  - Tablet (481px - 1024px): Two-column catalog grids, collapsing side navigation menu.
  - Desktop/Ultra-Wide (1025px+): Full multi-column mega menus, grid-based layouts, and fluid hover animations.
- **No Placeholders:** Avoid any incomplete logic statements or generic `// TODO` comments. Write complete, functional structures for the code arrays, including sample descriptive text blocks and fully operational WhatsApp URL generation logic.

---

# GENERATION FORMAT
Provide the complete source code files clearly partitioned into:
1. `index.html` - Containing the fully semantic structure, floating WhatsApp widgets, interactive guide layouts, and text elements.
2. `styles.css` - Containing the modern layout layers, premium blues matching the storefront branding, WhatsApp green accent classes, and graceful interactive states.
3. `app.js` - Containing the selection state for the guided wizard engine, reactive category tab filtering, and the core URL encoding logic for dynamic WhatsApp message generation.

Begin generating the codebase now based on these explicit parameters.