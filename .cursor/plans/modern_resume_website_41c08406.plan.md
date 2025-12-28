---
name: Modern Resume Website
overview: Build a production-grade, component-based resume website for Rashi Agrawal with a neutral & elegant design, multiple strategic CTAs, and reusable components for future expansion.
todos:
  - id: setup-foundation
    content: Create design tokens, types, content structure, and SEO metadata
    status: pending
  - id: build-ui-components
    content: Build reusable Button, Card, and Section components
    status: pending
    dependencies:
      - setup-foundation
  - id: create-header-footer
    content: Implement Header with navigation and Footer
    status: pending
    dependencies:
      - build-ui-components
  - id: build-hero-about
    content: Create Hero and About sections with CTAs
    status: pending
    dependencies:
      - build-ui-components
  - id: build-skills-section
    content: Implement Skills section with categorized badges
    status: pending
    dependencies:
      - build-ui-components
  - id: build-experience
    content: Create Experience timeline with impact highlights
    status: pending
    dependencies:
      - build-ui-components
  - id: build-education-additional
    content: Build Education and Additional Info sections
    status: pending
    dependencies:
      - build-ui-components
  - id: build-cta-section
    content: Create final CTA section with all action buttons
    status: pending
    dependencies:
      - build-ui-components
  - id: assemble-page
    content: Compose all sections in main page.tsx
    status: pending
    dependencies:
      - create-header-footer
      - build-hero-about
      - build-skills-section
      - build-experience
      - build-education-additional
      - build-cta-section
  - id: polish-responsive
    content: Add animations, smooth scroll, and responsive refinements
    status: pending
    dependencies:
      - assemble-page
---

# Modern Resume Website for Rashi Agrawal

## Design Philosophy

- **Neutral & Elegant**: Black, charcoal gray, white with a subtle accent color (sage green or muted gold)
- **Typography**: Clean hierarchy using Geist Sans (already installed) for excellent readability
- **Layout**: Single-page scroll with smooth navigation, strategic white space, and card-based sections
- **Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Subtle Animations**: Fade-in on scroll, hover effects for professionalism without distraction

## Component Architecture

### Core Layout Components

1. **`Header`** ([app/components/Header.tsx](app/components/Header.tsx))

- Sticky navigation with smooth scroll links
- CTAs: Download Resume, Contact buttons
- Clean, minimal design with subtle shadow on scroll

2. **`Footer`** ([app/components/Footer.tsx](app/components/Footer.tsx))

- Social links (LinkedIn, Email)
- Copyright notice
- Additional CTA repetition

### Section Components (All Reusable)

3. **`Hero`** ([app/components/Hero.tsx](app/components/Hero.tsx))

- Name, location, contact info
- Powerful tagline: "Customer Operations Professional | Quality & Process Excellence"
- Primary CTAs: Schedule Call, Download Resume
- Subtle gradient background

4. **`About`** ([app/components/About.tsx](app/components/About.tsx))

- Professional summary from resume
- Highlight: 5+ years experience
- Clean typography with pull quotes or highlights

5. **`Skills`** ([app/components/Skills.tsx](app/components/Skills.tsx))

- Organized skill categories in cards
- Categories: Customer Operations, Content Quality, Tools, Process, Communication
- Visual pill/badge design for individual skills

6. **`Experience`** ([app/components/Experience.tsx](app/components/Experience.tsx))

- Timeline-style layout (left-aligned dates)
- Each role as expandable card showing responsibilities and impact
- Awards highlighted with subtle badges
- Company descriptions in lighter text

7. **`Education`** ([app/components/Education.tsx](app/components/Education.tsx))

- Simple card with degree, institution, CGPA
- Icon or visual element for education

8. **`AdditionalInfo`** ([app/components/AdditionalInfo.tsx](app/components/AdditionalInfo.tsx))

- Unique differentiators (Radio Jockey background)
- Remote work strengths
- Personality highlights

9. **`CTA`** ([app/components/CTA.tsx](app/components/CTA.tsx))

- Reusable call-to-action section
- Used before footer: "Ready to connect?"
- All 4 action buttons: Email, LinkedIn, Schedule Call, Download Resume

### Utility Components

10. **`Button`** ([app/components/ui/Button.tsx](app/components/ui/Button.tsx))

    - Variants: primary, secondary, outline
    - Sizes: small, medium, large
    - Reusable across all CTAs

11. **`Section`** ([app/components/ui/Section.tsx](app/components/ui/Section.tsx))

    - Wrapper component for consistent spacing and layout
    - Handles responsive padding and max-width constraints

12. **`Card`** ([app/components/ui/Card.tsx](app/components/ui/Card.tsx))

    - Reusable card component with subtle shadows
    - Used in Skills, Experience, Education

## Page Structure

### Main Page ([app/page.tsx](app/page.tsx))

```javascript
<Header />
<Hero />
<About />
<Skills />
<Experience />
<Education />
<AdditionalInfo />
<CTA />
<Footer />
```



## Design Tokens & Styling

### Color Palette (Update [app/globals.css](app/globals.css))

- Primary: `#1a1a1a` (Charcoal)
- Secondary: `#4a4a4a` (Medium Gray)
- Accent: `#7a8f7f` (Sage Green)
- Background: `#fafafa` (Off-white)
- White: `#ffffff`
- Text: `#2a2a2a` (Near black)
- Muted Text: `#6a6a6a`

### Typography Scale

- Hero: text-5xl/6xl (mobile/desktop)
- Section Heading: text-3xl/4xl
- Card Title: text-xl/2xl
- Body: text-base/lg
- Small: text-sm

### Spacing System

- Section padding: py-16/py-24 (mobile/desktop)
- Card spacing: gap-6/gap-8
- Max width: max-w-6xl (centered)

## Strategic CTA Placement

1. **Header**: Download Resume (secondary button)
2. **Hero**: Schedule Call (primary), Download Resume (secondary)
3. **End of Experience**: "Let's talk about your needs" inline CTA
4. **CTA Section**: All 4 buttons - Email, LinkedIn, Schedule, Download
5. **Footer**: Email + LinkedIn links

## Data Structure

### Content File ([lib/content.ts](lib/content.ts))

- Centralized data object with all resume information
- Easy to update without touching components
- Type-safe with TypeScript interfaces

### Types ([types/resume.ts](types/resume.ts))

- Professional experience type
- Skill category type
- Contact information type
- Ensures consistency across components

## Metadata & SEO

### Comprehensive SEO Implementation

Update [app/layout.tsx](app/layout.tsx) with full metadata configuration:**Basic Meta Tags:**

- Title: "Rashi Agrawal | Customer Operations Professional | Remote Operations Specialist"
- Description: "Customer-focused operations professional with 5+ years experience in enterprise consulting and services-driven startups. Specializing in customer operations, quality review, and remote team collaboration."
- Keywords: Customer Operations, Quality Assurance, Remote Work, Operations Management, Process Optimization

**Open Graph Tags (Facebook, LinkedIn, WhatsApp):**

- og:title, og:description, og:type (website)
- og:url (production URL)
- og:image: `/og-image.png` (1200×630px)
- og:image:width: 1200, og:image:height: 630

**Twitter/X Card Tags:**

- twitter:card (summary_large_image)
- twitter:title, twitter:description
- twitter:image: `/twitter-image.png` (1200×675px)

**Favicon Configuration:**

- Link to existing favicon files in `/public/assets/favicon_io/`
- Apple touch icon, Android chrome icons, standard favicons

**Additional SEO:**

- Canonical URL
- Viewport meta tag (already in Next.js)
- Language tag (en)
- Structured data (JSON-LD) for Person schema

### Social Media Preview Images Required

Create these images and place in `/public/` directory:

1. **og-image.png** (1200×630px) - Facebook, LinkedIn, Discord, WhatsApp
2. **twitter-image.png** (1200×675px) - Twitter/X specific

**Image Design Guidelines:**

- Rashi's name prominently displayed
- Tagline: "Customer Operations Professional | Quality & Process Excellence"
- Neutral elegant color scheme matching website
- Your logo subtly placed
- Clean, professional typography
- Ensure text is readable when scaled down

## Implementation Priorities

### Phase 1: Foundation

- Set up design tokens in globals.css
- Create type definitions and content structure
- Build utility components (Button, Section, Card)

### Phase 2: Core Sections

- Header with navigation
- Hero section with primary CTAs
- About and Skills sections

### Phase 3: Experience & Details

- Experience timeline component
- Education and Additional Info
- CTA section and Footer

### Phase 4: Polish

- Smooth scroll behavior
- Fade-in animations on scroll
- Responsive refinements
- Dark mode consideration (optional)

## Technical Approach

- **No external dependencies** beyond what's installed
- **CSS-in-Tailwind**: Leverage Tailwind v4's improved utilities
- **TypeScript**: Full type safety across all components