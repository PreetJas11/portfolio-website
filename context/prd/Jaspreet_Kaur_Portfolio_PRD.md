# Product Requirements Document
## Jaspreet Kaur — Personal Portfolio Website

**Version:** 1.0  
**Date:** February 26, 2026  
**Owner:** Jaspreet Kaur  
**Status:** Ready for Development

---

## Table of Contents

1. [Site Overview](#1-site-overview)
2. [Pages & Sections](#2-pages--sections)
3. [Design & Style Guidelines](#3-design--style-guidelines)
4. [Technical Requirements](#4-technical-requirements)
5. [Content Strategy](#5-content-strategy)
6. [Component Library](#6-component-library)
7. [File & Folder Structure](#7-file--folder-structure)

---

## 1. Site Overview

### 1.1 Purpose & Goals

This is a personal portfolio website for **Jaspreet Kaur**, an AI/ML Engineer with 4+ years of experience. The site serves as a professional digital identity, replacing a static LinkedIn presence with an interactive, branded destination that tells her story and showcases her impact.

**Primary Goals:**
- Establish credibility as a senior AI/ML engineer capable of building scalable, production-grade solutions
- Highlight impactful accomplishments with quantified metrics (e.g., "boosted accuracy by 40%", "reduced manual effort by 98%")
- Drive inbound recruiter and client interest
- Provide a direct, frictionless path to contact

**Secondary Goals:**
- Demonstrate design sensibility and frontend competency alongside backend/AI skills
- Serve as a living document that can be updated as new projects and roles are added

### 1.2 Target Audience

| Audience | Goal | Key Sections They'll Visit |
|---|---|---|
| Technical Recruiters | Assess technical fit for AI/ML roles | Hero, Skills, Experience |
| Hiring Managers | Evaluate depth of experience and culture fit | About, Experience, Projects |
| Potential Clients / Collaborators | Validate capabilities before reaching out | Projects, Skills, Contact |
| Peers / Networkers | Learn more after meeting at an event or on LinkedIn | Hero, About, Contact |

### 1.3 Success Metrics
- Time-on-site > 2 minutes (indicating genuine engagement)
- Contact form submissions or LinkedIn click-throughs
- Bounce rate < 50%

---

## 2. Pages & Sections

### Architecture: Single-Page Application (SPA)

**Recommendation:** Build as a single-page application with smooth-scroll navigation anchored to named sections. This approach is ideal for a personal portfolio because it keeps the full narrative flow intact, avoids page-load interruptions, and performs better on mobile. Use `react-router-hash-link` or native anchor links for navigation.

**URL Structure:**  
`/` — single page with anchors: `#hero`, `#about`, `#experience`, `#projects`, `#skills`, `#education`, `#contact`

---

### Section 1: Hero / Landing

**Anchor:** `#hero`  
**Purpose:** Immediate, high-impact first impression that communicates who Jaspreet is and what action to take.

#### Content
- **Name:** Jaspreet Kaur
- **Headline (animated):** "Aspiring AI/ML Engineer" (typewriter animation cycling through: "AI/ML Engineer", "Python Developer", "Computer Vision Specialist", "LLM Builder")
- **Short intro copy:**  
  *"I build scalable AI systems that solve real-world problems — from computer vision pipelines to LLM-powered automation. Former AI Engineer Co-op @ Agriculture & Agri-Food Canada."*
- **Primary CTA button:** "View My Work" → scrolls to `#projects`
- **Secondary CTA button:** "Download Resume" → links to PDF resume
- **Social links:** LinkedIn, GitHub (floating vertical bar on right side, as seen in design inspiration)
- **Background:** Animated dark gradient with subtle particle/node network effect (inspired by EchoX design — dark teal/blue atmospheric glow)
- **Stats bar** (bottom of hero, as seen in EchoX design):

| Stat | Value | Label |
|---|---|---|
| Years of Experience | 4+ | Across AI, Software Engineering |
| Employers | 3 | Infosys, AAFC, Concentrix |
| Accuracy Boost | 40% | YOLOv8 Object Detection App |
| Reporting Automation | 98% | Manual effort eliminated at Concentrix |

#### Layout
```
[NAVBAR — fixed top, pill-shaped container]
[FULL VIEWPORT HEIGHT]
  Left: Name + Animated headline + Intro + CTA buttons
  Center/Right: Abstract animated visual (e.g., glowing neural network orb, or AI circuit art)
  Right edge: Vertical social icon bar (LinkedIn, GitHub, Email)
[BOTTOM BAR: 4-column stats strip with teal accent numbers]
```

#### Interactions & Animations
- **Entry animation:** Name fades/slides in from left on page load (300ms delay), headline types in after (600ms delay), CTAs appear last (900ms delay)
- **Typewriter effect** on headline, cycling every 3 seconds
- **Parallax** on background — subtle depth shift on scroll
- **Stats counter animation** — numbers count up when scrolled into view
- **Navbar:** Transparent on hero, transitions to frosted glass dark background on scroll

---

### Section 2: About Me

**Anchor:** `#about`  
**Purpose:** Humanize the profile, establish expertise, and set the narrative for the rest of the page.

#### Content
**Heading:** "About Me"  
**Subheading:** "Building AI That Works in the Real World"

**Body copy (drawn from LinkedIn summary — rewritten in second-person narrative):**

> I'm an AI & Software Engineer with 4+ years of experience building scalable applications and AI-driven solutions. My work sits at the intersection of machine learning, cloud infrastructure, and real-world impact — whether that's training a computer vision model to identify objects on a government dataset, building Streamlit apps that teams actually use, or automating workflows that save dozens of hours a week.
>
> I specialize in computer vision (YOLOv8, Roboflow), LLM-powered automation (OpenAI GPT-4o mini, Azure OpenAI), and full-stack development with Python, Django, and React. I'm equally comfortable in the cloud (Azure, AWS) and in the weeds of SQL optimization and ETL pipelines.
>
> When I'm not building, I'm researching — currently exploring Knowledge Graphs, Ontologies, and Signal Detection platforms as the next frontier in AI.

**Profile image:** Professional headshot (Jaspreet to provide), displayed in a stylized hexagonal or rounded-rectangle frame with a subtle cyan glow border.

**"What I Bring" cards (3 cards in a row):**
- 🧠 **AI-First Thinking** — From model training to deployment, I approach problems with production-readiness in mind
- ⚡ **Impact by Numbers** — Every project I touch is measured: 40% accuracy gains, 98% effort reduction, 99% system uptime
- 🔗 **Full-Stack Context** — I bridge the gap between data science and software engineering, shipping end-to-end solutions

#### Layout
```
[Section Title — center aligned]
[Two-column layout]
  Left: Profile photo (hexagonal frame) + decorative glowing line art
  Right: About copy + 3 "What I Bring" cards in a row below
```

#### Interactions
- Cards have a subtle **hover lift effect** with glowing border on hover
- Section fades in on scroll (Intersection Observer)

---

### Section 3: Experience / Work History

**Anchor:** `#experience`  
**Purpose:** Detailed, credible work history showcasing career growth and quantified impact.

#### Content — Full Work History

**1. Concentrix** *(October 2025 – Present, ~1 year)*  
*Technical Support Advisor III → II (promoted)*  
- Achieved 95% SLA compliance through Salesforce CRM
- Reduced escalations by over one-third via structured risk assessment workflows
- Eliminated 98% of manual Excel reporting by building Salesforce Connex dashboards
- Improved issue resolution accuracy by more than 80%

**2. Agriculture and Agri-Food Canada (AAFC)** *(May 2024 – August 2024, 4 months)*  
*AI Developer Co-op — Government of Canada*  
- Built object identification app using YOLOv8 + Roboflow + Streamlit + Azure DevOps → 40% accuracy boost
- Automated table extraction from PDFs using OpenAI GPT-4o mini
- Earned **Microsoft Azure OpenAI Hackathon Badge** from Microsoft Americas Azure Team
- Doubled project tracking efficiency via Power BI dashboard at user + department level
- Researched Signal Detection platforms: GraphDB, Azure Services, NLP, Ontologies, Knowledge Graphs

**3. Infosys** *(August 2019 – March 2023, 3 years 8 months)*  
*Technology Analyst → Senior System Software Engineer → System Software Engineer → Intern*

- **Technology Analyst (Sep 2022 – Mar 2023):** Led 12+ person team; eliminated database errors by two-thirds via MS SQL + Python ETL; won **Best Team – Project Excellence Award**; reduced SDLC cycle time by more than half
- **Senior System Software Engineer (Oct 2021 – Sep 2022):** Automated data processing with RESTful APIs + Python, saving 15 hours/week; enhanced DB performance, reducing processing time by half
- **System Software Engineer (Aug 2019 – Sep 2021):** Unix performance tuning achieving 99% production uptime; halved issue resolution time through cross-team collaboration
- **Intern (Jan 2019 – May 2019):** Built full-stack Secure Webmail Client (Java, SpringBoot, React, HTML/CSS, SQL) in a team of 5

#### Layout
**Vertical timeline** (left-aligned line with nodes) for desktop; stacked cards for mobile.

```
[Section Title]
[Filter tabs: "All" | "AI/ML" | "Engineering" | "Leadership"]
[Timeline]
  ● [Year badge] — Company name + Role + Duration
    └─ Card: Logo space | Role | Company | Dates | 3–4 bullet points
```

Each card is a glassmorphism-style dark card with a left accent bar in teal/cyan. The timeline connector line glows faintly in teal. Clicking a card expands it to show all bullet points (accordion behavior).

#### Interactions
- Timeline nodes pulse subtly on load
- Cards expand/collapse on click (smooth height transition)
- Filter tabs animate the list to show/hide relevant entries
- Cards appear sequentially on scroll (staggered fade-in, 100ms apart)

---

### Section 4: Projects / Work

**Anchor:** `#projects`  
**Purpose:** Showcase the most impactful and technically interesting projects with enough context for a hiring manager to evaluate depth.

#### Content — Featured Projects

**Project 1: Object Identification App (AAFC)**
- **Stack:** Python, YOLOv8, Roboflow, Streamlit, Azure DevOps
- **Description:** Developed a computer vision app for Agriculture and Agri-Food Canada that identifies objects in images using a fine-tuned YOLOv8 model. Integrated with Azure DevOps for CI/CD.
- **Impact:** 40% boost in identification accuracy
- **Badge:** 🏅 Microsoft Azure OpenAI Hackathon Badge
- **Tags:** `Computer Vision` `Azure` `Streamlit` `Python`

**Project 2: PDF Table Extraction Automation**
- **Stack:** Python, OpenAI GPT-4o mini, Azure OpenAI Service, Azure Document Intelligence
- **Description:** Automated extraction of structured table data from large PDF datasets using GPT-4o mini, replacing a manual, error-prone process.
- **Impact:** Fully automated — saved hours of manual work per week
- **Tags:** `LLMs` `Azure OpenAI` `Python` `Automation`

**Project 3: Power BI KPI Dashboard Suite**
- **Stack:** Power BI, Salesforce Connex, Excel, SQL
- **Description:** Built multi-level dashboards (user + department) for real-time KPI tracking including daily follow-ups, overdue tasks, and open tickets.
- **Impact:** 98% reduction in manual reporting effort
- **Tags:** `Power BI` `Salesforce` `Data Visualization`

**Project 4: Secure Webmail Client (Full-Stack)**
- **Stack:** Java, Spring Boot, React JS, HTML, CSS, SQL
- **Description:** Built a full-stack secure webmail client as part of a 5-person team during Infosys internship. Implemented backend API layer, frontend UI, and database schema.
- **Tags:** `Java` `Spring Boot` `React` `SQL` `Full-Stack`

**Project 5: ETL Pipeline & Database Optimization (Infosys)**
- **Stack:** Python, MS SQL, PL/SQL
- **Description:** Designed and implemented ETL pipelines that eliminated database errors by two-thirds and improved customer data record quality across a 12-person team.
- **Impact:** Won Best Team – Project Excellence Award
- **Tags:** `ETL` `Python` `SQL` `Database Optimization`

#### Layout
```
[Section Title + Subtitle]
[Filter pills: All | Computer Vision | LLMs | Full-Stack | Data]
[3-column grid on desktop, 2-column tablet, 1-column mobile]
  Each card:
    - Header image / tech icon collage (teal gradient background)
    - Project title + short description (2 lines)
    - Impact stat (large teal number)
    - Tech tag pills
    - "View Details" → modal or expanded card with full description
    - Optional: GitHub / Live link icons
```

#### Interactions
- Filter pills animate the grid (fade + scale transition)
- Cards have a **3D tilt effect** on hover (subtle `perspective` CSS transform)
- Glow border appears on hover (cyan/teal box-shadow)
- Clicking "View Details" opens a slide-up modal with full project breakdown

---

### Section 5: Skills / Tech Stack

**Anchor:** `#skills`  
**Purpose:** Visual, scannable representation of the full technology stack — designed for both technical and non-technical readers.

#### Content — Skills by Category

**Programming & Frameworks:** Python, C, Java, React JS, Django, Streamlit  
**AI & ML:** Machine Learning, Deep Learning, NLP, LLMs, Computer Vision (YOLOv8), Roboflow, TensorFlow, Keras, Scikit-learn  
**Cloud:** Microsoft Azure (Azure ML, Azure OpenAI, Azure DevOps, Azure Document Intelligence), AWS Athena  
**Databases:** MySQL, Oracle SQL, SQL Server, PL/SQL, MongoDB, Google Firebase  
**Data & Visualization:** Power BI, Tableau, Pandas, NumPy, Matplotlib  
**Tools & IDEs:** Git, GitHub, Jupyter Notebook, Google Colab, Splunk, Jira, Kaggle  
**Methodologies:** Agile, Scrum, SDLC  
**Operating Systems:** Windows, Linux/Unix, macOS  

#### Layout
```
[Section Title]
[Category tabs or accordion]
  [Skills grid — icon + label per skill]
    Each skill: rounded pill with icon (Devicons/Simple Icons) + name
    Hover: pill glows and animates slightly
```

Alternatively, use a **proficiency radar/spider chart** (recharts or D3) for core skills (Python, Azure, Computer Vision, LLMs, SQL, React) with teal fill.

Below the icon grid, show a **"Core Expertise" horizontal bar chart** with 5–6 key skills and approximate proficiency bars:
- Python: 95%
- Azure Cloud: 85%
- Machine Learning / AI: 90%
- Computer Vision: 85%
- SQL / Databases: 85%
- React / Full-Stack: 75%

#### Interactions
- Skill pills animate in with a staggered wave on scroll
- Proficiency bars fill from 0% to final value when section enters viewport (1.2s transition)
- Hovering a category tab filters the icon grid

---

### Section 6: Education & Certifications

**Anchor:** `#education`  
**Purpose:** Validate academic background and continuous learning commitment.

#### Content

**Education:**

| Degree | Institution | Period |
|---|---|---|
| Master of Applied Computing (AI specialization) | University of Windsor | May 2023 – 2024 |
| Bachelor of Technology, Computer Science | Punjabi University | August 2015 – May 2019 |

**Certifications:**
- Microsoft Azure Fundamentals — AZ-900
- Diplôme d'études en langue française (DELF) A1–B1
- Infosys Certified Python Associate
- Managing Jira Projects
- Learning Power BI Desktop
- **Microsoft Azure OpenAI Hackathon Badge** (Microsoft Americas Azure Team)

**Awards:**
- Best Team – Project Excellence Award (Infosys)

#### Layout
```
[Two-column layout]
  Left: Education cards (institution name, degree, dates, logo placeholder)
  Right: Certifications grid (badge-style cards with icon, name, issuer)
         Awards row below certifications
```

Each certification card is a small dark card with a gradient badge icon and issuer name. Award cards have a gold/amber accent color.

#### Interactions
- Cards flip on hover to reveal more detail (CSS 3D card flip)
- Certification badges animate in with a "stamp" scale effect on scroll

---

### Section 7: Contact

**Anchor:** `#contact`  
**Purpose:** Remove all friction between a recruiter/client and getting in touch.

#### Content
**Heading:** "Let's Build Something Together"  
**Subheading:** "Open to full-time AI/ML engineering roles, freelance AI projects, and research collaborations."

**Contact details:**
- Email: jaspreetbarnala0123@gmail.com
- LinkedIn: linkedin.com/in/jaspreet~kaur
- Location: Greater Toronto Area, Canada

**Contact form fields:**
- Name (text input)
- Email (email input)
- Subject (dropdown: "Job Opportunity" | "Freelance Project" | "Collaboration" | "Other")
- Message (textarea, min 5 rows)
- Send button → submits to Formspree or EmailJS (no backend needed)

**Alternative:** Below the form, show two large CTA cards side by side:
- 📄 "View Resume" → download PDF
- 💼 "Connect on LinkedIn" → external link

#### Layout
```
[Full-width section with dark gradient background]
[Two-column layout]
  Left: Heading + Subheading + Contact details + Social icons
  Right: Contact form (glassmorphism card)
[Bottom: Availability badge — "🟢 Open to Opportunities"]
```

#### Interactions
- Form fields have smooth focus animations (label floats up on focus)
- Submit button has a loading spinner state, then success/error state
- Success state shows a checkmark animation and "I'll be in touch within 24 hours!" message
- Availability badge pulses with a soft green glow

---

### Section 8: Footer

**Purpose:** Navigation, legal, and final brand impression.

#### Content
```
[Logo / Name: "Jaspreet Kaur" — small version]
[Nav links: About | Experience | Projects | Skills | Contact]
[Social icons: LinkedIn | GitHub | Email]
[Copyright: © 2026 Jaspreet Kaur. All rights reserved.]
[Tagline: "Designed & Built with ❤️ in Toronto"]
```

#### Layout
Single-row on desktop, stacked on mobile. Thin top border in teal. Dark background (#0A0F1A or similar).

---

## 3. Design & Style Guidelines

### 3.1 Inspiration Summary

The design inspiration across all three screenshots shares a consistent visual language:
- **Dark mode first** with deep navy/near-black backgrounds
- **Cyan and electric blue accents** as primary interactive colors
- **Glassmorphism cards** — semi-transparent cards with backdrop blur
- **Bold, oversized typography** for headlines
- **High-contrast stat callouts** (large teal numbers)
- **Clean, modern tech aesthetic** — professional but not sterile

### 3.2 Colour Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background Primary | Deep Navy | `#060D1A` | Page background |
| Background Secondary | Dark Navy | `#0D1B2A` | Section alternates, card backgrounds |
| Background Tertiary | Slate Navy | `#162236` | Elevated cards, modals |
| Primary Accent | Electric Cyan | `#00C8E0` | Links, icons, highlights, borders |
| Secondary Accent | Deep Blue | `#0066FF` | Buttons, CTA elements |
| Gradient | Cyan to Blue | `#00C8E0 → #0044CC` | Gradient text, logo mark, decorative elements |
| Text Primary | White | `#F0F4FF` | Headings, body text |
| Text Secondary | Cool Grey | `#8899B0` | Subheadings, meta text, labels |
| Text Muted | Dim Grey | `#4A5568` | Footnotes, timestamps |
| Success | Teal Green | `#10B981` | Form success states, availability badge |
| Warning / Award | Amber | `#F59E0B` | Award callouts |
| Glass Surface | Semi-transparent | `rgba(255,255,255,0.04)` | Card backgrounds with `backdrop-filter: blur(12px)` |
| Glass Border | Subtle White | `rgba(255,255,255,0.08)` | Card borders |

### 3.3 Typography

**Font Pairing:**

| Role | Font | Weight | Source |
|---|---|---|---|
| Display / Hero | **Syne** | 700, 800 | Google Fonts |
| Headings | **Syne** | 600, 700 | Google Fonts |
| Body / UI | **Inter** | 400, 500 | Google Fonts |
| Code / Tags | **JetBrains Mono** | 400 | Google Fonts |

**Type Scale:**

| Element | Size | Weight | Font |
|---|---|---|---|
| Hero name | 72–96px (clamp) | 800 | Syne |
| Section headings | 40–52px | 700 | Syne |
| Card titles | 20–24px | 600 | Syne |
| Body text | 16–18px | 400 | Inter |
| Labels / tags | 12–14px | 500 | Inter / JetBrains Mono |
| Stats numbers | 48–64px | 700 | Syne |

**Gradient Text** (for hero headline and section accents):
```css
background: linear-gradient(135deg, #00C8E0, #0066FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 3.4 Visual Style

- **Overall tone:** Bold, modern, tech-forward. Professional but with personality. Dark and atmospheric — like the control center of an AI lab.
- **Whitespace:** Generous. Sections have `padding: 100px 0` minimum. Max content width `1200px`, centered.
- **Border radius:** Consistent use of `12px` for cards, `8px` for pills/tags, `50px` for buttons, `999px` for availability badges.
- **Shadows:** Avoid traditional shadows. Use **glow effects**: `box-shadow: 0 0 30px rgba(0, 200, 224, 0.15)` for accent elements.
- **Borders:** `1px solid rgba(255,255,255,0.08)` on cards. Accent borders use `1px solid rgba(0, 200, 224, 0.4)`.
- **Icons:** Use [Lucide React](https://lucide.dev/) for UI icons and [Simple Icons](https://simpleicons.org/) / [Devicons](https://devicons.github.io/devicon/) for tech stack logos.

### 3.5 Mode Preference

**Dark mode only.** This aligns with all three design inspirations and is appropriate for an AI/tech portfolio. No light mode toggle needed (avoids added complexity and dilutes the brand).

### 3.6 Spacing & Layout Principles

- **Grid:** 12-column CSS Grid. Content max-width: `1200px`. Gutters: `24px` (desktop), `16px` (mobile).
- **Section rhythm:** Alternate section backgrounds between `#060D1A` and `#0D1B2A` for visual separation without borders.
- **Cards:** `border-radius: 12px`, `padding: 28px 32px`, glassmorphism background.
- **Responsive breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px – 1023px`
  - Desktop: `≥ 1024px`
  - Wide: `≥ 1440px`

### 3.7 Animation & Micro-Interactions

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Page load (hero text) | Fade + slide up | 400–900ms (staggered) | `ease-out` |
| Scroll reveal (sections) | Fade in + translateY(30px → 0) | 500ms | `ease-out` |
| Stats counter | Count up from 0 | 1200ms | `ease-in-out` |
| Typewriter headline | Character-by-character | 80ms/char | Linear |
| Button hover | Scale 1.03 + glow intensify | 200ms | `ease` |
| Card hover | translateY(-4px) + glow | 200ms | `ease` |
| Skills bars | Width 0 → final % | 1200ms | `ease-out` |
| Navbar transition | Background fade in | 300ms | `ease` |
| Modal open | Scale 0.95→1 + fade | 250ms | `ease-out` |
| Form focus | Label float up | 200ms | `ease` |

Use `IntersectionObserver` API (or `framer-motion` if using React) for scroll-triggered animations. Add `prefers-reduced-motion` media query to disable animations for accessibility.

---

## 4. Technical Requirements

### 4.1 Technology Stack Recommendation

**Framework:** React 18 (Vite build tool)  
**Styling:** Tailwind CSS v3 + custom CSS for glassmorphism and glow effects  
**Animation:** Framer Motion (for scroll animations, page transitions, counter animations)  
**Icons:** Lucide React + react-icons (for Devicons)  
**Charts:** Recharts (for skills radar/bar chart)  
**Contact Form:** EmailJS or Formspree (no backend required)  
**Deployment:** Vercel or Netlify (free tier, automatic deploys from GitHub)

### 4.2 Responsiveness

All sections must be fully responsive with these column collapses:

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero | 2-col | 2-col (smaller) | 1-col (text top, visual bottom) |
| About | 2-col | 2-col | 1-col |
| Experience | Timeline | Timeline (compact) | Stacked cards |
| Projects | 3-col grid | 2-col grid | 1-col |
| Skills | Icon grid + chart | Icon grid + chart | Scrollable icon grid |
| Contact | 2-col | 2-col | 1-col |

### 4.3 Performance

- **Target Lighthouse score:** 90+ across all categories
- Lazy load images with `loading="lazy"` attribute
- Use `next/image` or Vite image optimization plugin for image compression
- Code split by route/section using React lazy + Suspense
- Preload critical fonts via `<link rel="preload">`
- Use WebP format for all images
- Minify CSS/JS in production build (Vite handles this)
- Gzip/Brotli compression enabled on Vercel/Netlify automatically

### 4.4 SEO

**Meta tags in `<head>`:**
```html
<title>Jaspreet Kaur — AI/ML Engineer | Toronto</title>
<meta name="description" content="AI & Software Engineer with 4+ years of experience in computer vision, LLMs, and scalable Python applications. Former AI Engineer Co-op @ Government of Canada." />
<meta name="keywords" content="AI Engineer, ML Engineer, Python, Computer Vision, YOLOv8, LLMs, Azure, Toronto" />
<link rel="canonical" href="https://jaspreetkaur.dev" />

<!-- Open Graph -->
<meta property="og:title" content="Jaspreet Kaur — AI/ML Engineer" />
<meta property="og:description" content="Building scalable AI solutions. Python · Azure · YOLOv8 · LLMs." />
<meta property="og:image" content="/og-image.png" />  <!-- 1200x630px -->
<meta property="og:url" content="https://jaspreetkaur.dev" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Jaspreet Kaur — AI/ML Engineer" />
<meta name="twitter:image" content="/og-image.png" />
```

**Semantic HTML:** Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<h1>`–`<h3>` in correct hierarchy. Only one `<h1>` per page.

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jaspreet Kaur",
  "jobTitle": "AI/ML Engineer",
  "url": "https://jaspreetkaur.dev",
  "sameAs": ["https://linkedin.com/in/jaspreet~kaur"]
}
```

### 4.5 Accessibility (WCAG 2.1 AA)

- All images have descriptive `alt` attributes
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text (verify all teal-on-dark combinations)
- All interactive elements are keyboard focusable with visible `:focus-visible` styles
- Skip-to-main-content link as first DOM element
- `aria-label` on icon-only buttons and social links
- Form fields have associated `<label>` elements (not just placeholder text)
- Motion animations respect `prefers-reduced-motion: reduce`
- Modal implements focus trap when open; closes on Escape key
- Navigation uses `role="navigation"` and `aria-current="page"` for active links

### 4.6 Navigation

- Sticky/fixed navbar with smooth scroll to sections on click
- Active section highlighting in navbar (uses Intersection Observer to detect current section)
- Mobile: hamburger menu → full-screen overlay nav with slide-in animation
- "Back to top" floating button appears after scrolling past hero

### 4.7 Contact Form

Use **EmailJS** (free tier: 200 emails/month) with the following setup:
```javascript
emailjs.send('service_id', 'template_id', {
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: 'jaspreetbarnala0123@gmail.com'
}, 'public_key');
```

Form validation:
- Name: required, min 2 chars
- Email: required, valid format
- Subject: required (dropdown)
- Message: required, min 20 chars
- Show inline error messages on blur
- Disable submit button while sending

---

## 5. Content Strategy

### 5.1 Tone of Voice

Based on the LinkedIn profile, Jaspreet's writing is confident, specific, and results-driven. The portfolio copy should match this with these principles:

- **Metric-led:** Lead with numbers whenever possible ("40% accuracy boost", "98% reduction", "15 hours/week saved")
- **Active voice:** "I built X" not "X was built"
- **Precise language:** Name specific tools and technologies (YOLOv8, not just "computer vision")
- **Professional with warmth:** Not stiff or robotic — the About section can show personality
- **Concise:** No filler phrases. Every sentence earns its place.

**Voice examples:**
- ❌ "I am a passionate software professional who enjoys working with cutting-edge technologies..."
- ✅ "I build AI systems that ship to production and actually work — from computer vision pipelines to LLM-powered automation."

### 5.2 CTA Strategy

**Primary CTA** (hero, repeated in projects): "View My Work" — drives to `#projects`  
**Secondary CTA** (hero): "Download Resume" — builds instant credibility  
**Tertiary CTA** (experience, projects): "Let's Connect" — drives to `#contact`  
**Persistent CTA** (floating, appears after scroll): Small "Contact" pill button, teal, bottom-right corner

The goal is to move visitors: **See impact → Understand depth → Reach out.**

### 5.3 Information Flow

The page is structured as a narrative arc:

```
WHO I AM (Hero)
    ↓
WHAT I BELIEVE (About)
    ↓
WHAT I'VE DONE (Experience → Projects)
    ↓
WHAT I KNOW (Skills)
    ↓
CREDENTIALS (Education)
    ↓
REACH OUT (Contact)
```

Each section ends with a visual prompt or CTA that pulls the user forward to the next.

---

## 6. Component Library

The following reusable components should be built:

| Component | Props | Notes |
|---|---|---|
| `GlassCard` | `children`, `className`, `glowColor` | Glassmorphism card base |
| `TechBadge` | `name`, `icon`, `color` | Skill pill/badge |
| `StatCounter` | `value`, `suffix`, `label` | Animated counter |
| `TimelineItem` | `company`, `role`, `dates`, `bullets`, `isExpanded` | Work experience entry |
| `ProjectCard` | `title`, `description`, `stack`, `impact`, `tags` | Portfolio project card |
| `SectionTitle` | `title`, `subtitle`, `align` | Consistent section heading |
| `Button` | `variant` (primary/secondary/ghost), `size`, `icon` | CTA button |
| `NavBar` | `links`, `isScrolled` | Fixed navigation |
| `ContactForm` | `onSubmit` | Validated contact form |
| `Modal` | `isOpen`, `onClose`, `children` | Project detail modal |
| `AnimatedSection` | `children`, `delay` | Scroll-reveal wrapper |

---

## 7. File & Folder Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png           (1200x630px Open Graph image)
│   └── resume.pdf             (Jaspreet's resume)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.webp
│   │   │   └── project-*.webp
│   │   └── icons/
│   ├── components/
│   │   ├── ui/                (GlassCard, Button, Badge, Modal)
│   │   ├── layout/            (NavBar, Footer, SectionTitle)
│   │   └── sections/          (Hero, About, Experience, Projects, Skills, Education, Contact)
│   ├── hooks/
│   │   ├── useIntersectionObserver.js
│   │   └── useCounterAnimation.js
│   ├── data/
│   │   ├── experience.js      (work history data)
│   │   ├── projects.js        (project data)
│   │   └── skills.js          (skills data)
│   ├── styles/
│   │   ├── globals.css        (CSS variables, base styles)
│   │   └── animations.css     (keyframe animations)
│   ├── App.jsx
│   └── main.jsx
├── index.html                 (meta tags, fonts preload)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Appendix: Assets Needed from Jaspreet

Before development begins, collect the following:

1. **Professional headshot** (min 400x400px, ideally 800x800px, PNG/JPG)
2. **Resume PDF** (updated version for download link)
3. **GitHub profile URL** (for social links and potential project links)
4. **Domain name** (e.g., `jaspreetkaur.dev` or `jaspreetkaur.ca`)
5. **EmailJS account** (free, ~10 min setup at emailjs.com)
6. **Any project screenshots or demo links** to embed in project cards
7. **Preferred availability status** ("Open to Work" vs "Selectively considering opportunities")

---

*This PRD was generated from Jaspreet Kaur's LinkedIn profile and three design inspiration screenshots (EchoX smart speaker landing page, Paradigm logo identity, Paradigm business card). All content, metrics, and technologies are sourced directly from the provided profile.*

*End of Document — v1.0*
