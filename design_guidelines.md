# RastaLink Enterprise Trucking Platform Design Guidelines

## Design Approach
**Selected Approach:** Design System - Carbon Design (IBM)
**Justification:** Enterprise logistics platforms require data-heavy interfaces with clear information hierarchy. Carbon Design excels at complex enterprise applications with robust data visualization and professional aesthetics.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Brand Primary: 205 85% 25% (deep professional blue)
- Brand Secondary: 205 45% 15% (darker navy)

**Supporting Colors:**
- Success/Active: 145 65% 35% (logistics green)
- Warning: 35 85% 55% (attention amber)
- Error: 0 75% 45% (critical red)
- Neutral Dark: 210 15% 20% (charcoal)
- Neutral Light: 210 10% 95% (off-white)

### Typography
**Font Stack:** IBM Plex Sans (Google Fonts)
- Headers: 600 weight, 24px-48px
- Body: 400 weight, 14px-16px
- Data/Numbers: 500 weight, 14px (monospace spacing)
- Labels: 500 weight, 12px

### Layout System
**Spacing Primitives:** Tailwind units 2, 4, 6, 8, 12, 16
- Tight spacing: p-2, m-2 (component internals)
- Standard spacing: p-4, gap-4 (general layout)
- Section spacing: p-6, mb-8 (component separation)
- Large spacing: p-12, my-16 (page sections)

### Component Library

**Navigation:**
- Top navigation bar with company logo, main navigation, user profile
- Sidebar navigation for primary functions (Dashboard, Fleet, Routes, Analytics)
- Breadcrumb navigation for deep hierarchies

**Data Display:**
- Clean data tables with alternating row colors
- Status badges with color coding (Active/Inactive/En Route)
- KPI cards with large numbers and trend indicators
- Interactive maps for route visualization
- Timeline components for shipment tracking

**Forms:**
- Professional input fields with clear labels
- Dropdown selectors for fleet assignments
- Date/time pickers for scheduling
- Multi-step forms for complex data entry

**Dashboard Elements:**
- Widget-based dashboard layout
- Real-time status indicators
- Chart components (bar, line, donut for analytics)
- Alert/notification panels

## Visual Design Principles

**Professional Aesthetics:**
- Clean, spacious layouts with generous whitespace
- Consistent 8px grid alignment
- Subtle shadows and borders for depth
- Minimal use of rounded corners (4px radius)

**Data Hierarchy:**
- Bold typography for critical information
- Color-coded status systems
- Progressive disclosure for complex data
- Scannable table designs with clear column headers

**Trust & Reliability:**
- Conservative color palette
- Consistent interaction patterns
- Clear loading states and feedback
- Professional iconography from Carbon Design icons

## Images Section

**No Large Hero Image Required**
This is a data-focused enterprise application, not a marketing site.

**Functional Images:**
- Small company logo (32px height) in top navigation
- User profile avatars (40px circular)
- Truck/vehicle type icons (24px) in fleet listings
- Map imagery for route visualization
- Small status icons (16px) for shipment states

**Image Placement:**
- Logo: Top-left navigation bar
- Avatars: User dropdown, driver assignments
- Vehicle icons: Fleet management tables
- Maps: Embedded in route planning and tracking views
- Status icons: Throughout data tables and status displays

The design prioritizes functionality and data clarity over visual marketing elements, maintaining a professional enterprise application aesthetic.