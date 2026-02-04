# Infotron Solutions - Product Requirements Document

**Project:** Enterprise IT Services Website  
**Last Updated:** December 4, 2025  
**Status:** Phase 1 Complete - Frontend with Mock Data

---

## Original Problem Statement

Build a high-end, premium, global consulting website for **Infotron Solutions** — a US-focused IT Services & Talent Solutions firm delivering Managed Services, Staff Augmentation, and Business Consulting to enterprise and growth-stage companies.

The website must:
- Position Infotron as a delivery-first, execution-driven partner
- Appeal to CIOs, CTOs, Product Leaders, and Investors  
- Compete visually and strategically with top international IT services brands (Accenture, Toptal, BCG Digital Ventures)

---

## Architecture & Tech Stack

**Frontend:**
- React 19 with React Router for navigation
- Tailwind CSS + Shadcn UI components
- Light corporate theme (white/light grey + blue-purple gradients)
- Fully responsive design
- Toast notifications via Sonner

**Backend** (Planned Phase 2):
- FastAPI
- MongoDB for data storage
- HubSpot form integration for lead capture
- CEIPAL API integration for job listings

---

## User Personas

1. **Enterprise Clients (Primary)**
   - CTOs, VPs of Engineering, Product Leaders
   - Looking for managed services, staff augmentation, or strategic consulting
   - Need: Trust signals, case studies, execution track record

2. **Technology Professionals (Secondary)**
   - Senior engineers, architects, consultants
   - Looking for high-impact projects with top-tier clients
   - Need: Clear job descriptions, company culture info, application process

3. **Investors/Partners (Tertiary)**
   - Private equity, venture capital, strategic partners
   - Evaluating Infotron's capabilities and track record
   - Need: Company stats, client testimonials, success metrics

---

## Core Requirements (Static)

### Pages Structure
1. **Home** - Hero, services overview, why Infotron, client logos, case studies, testimonials
2. **Services Pages** (3 pages)
   - Managed Services
   - Staff Augmentation
   - Business Consulting
   - Each with: Hero, Overview, Benefits, Methodology, Case Study, CTA
3. **About** - Company story, mission, vision, values, culture, stats
4. **Resources** - Blog posts + Case studies (tabbed interface)
5. **Careers** - Job listings with search/filter, general application
6. **Contact** - Dual forms (client inquiry / candidate application)
7. **Job Detail** - Individual job posting pages

### Navigation & CTAs
- Fixed header with services dropdown
- Two primary CTAs throughout: "Schedule Consultation" (clients) + "View Positions" (candidates)
- Footer with services, company links, contact info, social

### Design Requirements
- Light corporate theme (NOT dark theme)
- Blue-purple gradient accents
- Enterprise professional aesthetic
- Premium photography from Unsplash
- Client logos: Hilmar Cheese, Sculptor Capital, Lucid Motors
- Smooth animations and hover effects
- Accessibility (WCAG AA compliant)

---

## What's Been Implemented ✅

**Date: December 4, 2025 - Phase 1 Complete**

### Frontend Pages (All Functional)
- ✅ Homepage with hero, services, testimonials, case studies, stats
- ✅ 3 Service detail pages (Managed Services, Staff Augmentation, Business Consulting)
- ✅ About page with company story, values, stats
- ✅ Resources page with blogs + case studies (tabbed navigation)
- ✅ Careers page with job search/filter functionality
- ✅ Job Detail pages for individual positions
- ✅ Contact page with client/candidate form toggle
- ✅ Header with services dropdown navigation
- ✅ Footer with links and CTAs
- ✅ Privacy & Terms placeholder pages

### Mock Data Created
- 4 client logos (mock placeholders)
- 3 service definitions
- 6 "Why Infotron" differentiators
- 3 detailed case studies with results
- 3 executive testimonials
- 4 blog posts with metadata
- 6 job listings across categories (Engineering, Infrastructure, Consulting, Trading, Data, Leadership)
- Company values and statistics

### Forms (Ready for HubSpot)
- Client inquiry form (name, email, company, phone, service interest, message)
- Candidate application form (name, email, phone/LinkedIn, job ID, cover letter)
- Contact page with form type toggle
- All forms have proper validation and structure for HubSpot integration

---

## API Contracts (Phase 2)

### HubSpot Integration (Planned)
**Endpoint:** HubSpot Forms API  
**Forms to integrate:**
1. Client Inquiry Form
   - Portal ID: TBD
   - Form ID: TBD
   - Fields: name, email, company, phone, service, message

2. Candidate Application Form
   - Portal ID: TBD  
   - Form ID: TBD
   - Fields: name, email, linkedin, jobId, message

### CEIPAL Integration (Planned)
**Endpoint:** CEIPAL Jobs API  
**Configuration:**
- API Key: TBD
- Organization ID: TBD
- Endpoints: TBD

**Job Listing Schema:**
```json
{
  "id": "string",
  "title": "string",
  "location": "string",
  "type": "string", // Full-Time, Contract, Part-Time
  "category": "string",
  "description": "string",
  "requirements": ["string"],
  "responsibilities": ["string"],
  "salary": "string"
}
```

---

## Frontend-Backend Integration Plan

### Mock to Real Data Migration

**Current State:** All data in `/frontend/src/data/mockData.js`

**Integration Steps:**
1. Create backend API endpoints:
   - `GET /api/jobs` - Fetch jobs from CEIPAL
   - `GET /api/jobs/:id` - Get job details
   - `POST /api/contact/client` - Submit client inquiry (HubSpot)
   - `POST /api/contact/candidate` - Submit candidate application (HubSpot)
   - `GET /api/case-studies` - Fetch case studies from CMS/DB
   - `GET /api/blog-posts` - Fetch blog posts from CMS/DB

2. Replace mock imports with API calls in:
   - `/pages/Careers.jsx` - fetch jobs from API
   - `/pages/JobDetail.jsx` - fetch job by ID
   - `/pages/Resources.jsx` - fetch case studies & blogs
   - `/pages/Contact.jsx` - submit to HubSpot via backend proxy

3. Add loading states and error handling to all data-fetching components

---

## Prioritized Backlog

### P0 (Must Have Before Launch)
- ✅ Complete frontend with all pages
- ⏳ HubSpot form integration (pending credentials)
- ⏳ CEIPAL job listings integration (pending credentials)
- ⏳ Replace placeholder client logos with real logos
- ⏳ SEO optimization (meta tags, Open Graph, structured data)
- ⏳ Performance optimization (image optimization, lazy loading)
- ⏳ Analytics integration (GA4)

### P1 (Should Have)
- Backend API for job listings
- Backend API for contact forms
- CMS integration for blog posts and case studies
- Admin panel for content management
- Email notifications for form submissions
- Newsletter signup

### P2 (Nice to Have)
- Blog detail pages with full content
- Case study detail pages
- Team member profiles
- Client portal
- Candidate portal with application tracking
- Live chat integration

---

## Next Tasks

### Immediate Next Steps:
1. **Await Design Approval** from client
2. **Collect Integration Credentials:**
   - HubSpot Portal ID & Form IDs
   - CEIPAL API Key, Org ID, Endpoints
3. **Backend Development:**
   - Set up FastAPI endpoints
   - Integrate HubSpot Forms API
   - Integrate CEIPAL Jobs API
   - Add MongoDB for case studies/blogs
4. **Content Updates:**
   - Replace placeholder client logos
   - Add real case study content
   - Add real blog post content
5. **Testing & QA**
6. **SEO & Performance Optimization**
7. **Deployment Preparation**

---

## Technical Notes

- All routes use React Router v7
- Forms structured for easy HubSpot integration (field names match HubSpot standards)
- Job listings use local mock data, ready to swap with CEIPAL API
- Images use Unsplash URLs (should be replaced with WebP format from CDN)
- All environment variables properly configured in `.env` files
- Mobile-responsive design tested across breakpoints
