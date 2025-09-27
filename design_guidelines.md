# RastaLink Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern dark-themed platforms like Linear, Notion, and the provided Warp Speed design reference. This approach suits the technical, data-driven nature of logistics while maintaining visual appeal for small business owners.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 220 15% 8% (deep dark blue-gray)
- Surface: 220 12% 12% (slightly lighter panels)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 220 5% 65% (muted gray)

**Brand Accents (Use Sparingly):**
- Neon Yellow-Green: 75 85% 60% (primary accent for active states)
- Neon Orange: 25 90% 65% (secondary accent for alerts/warnings)
- Status Green: 142 70% 50% (loaded trucks)
- Status Red: 0 70% 55% (breakdown/repair)
- Status Blue: 210 70% 55% (empty trucks)
- Status Amber: 45 85% 60% (halted/break)

### B. Typography
**Primary Font:** Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight
- Monospace: JetBrains Mono for truck codes

**Hierarchy:**
- Hero Title: text-4xl font-bold
- Section Headers: text-2xl font-semibold
- Body Text: text-base font-medium
- Captions: text-sm font-normal

### C. Layout System
**Tailwind Spacing Units:** Primarily use 2, 4, 6, 8, 12, 16
- Container padding: px-4 md:px-8
- Section spacing: py-12 md:py-16
- Component gaps: gap-4 to gap-8
- Card padding: p-6

### D. Component Library

**Navigation:**
- Clean header with RastaLink logo (left)
- Subtle background blur effect
- Minimal navigation items

**Search Interface:**
- Prominent search bar with rounded corners (rounded-xl)
- Zip code input with autocomplete dropdown
- Search button with neon yellow-green accent
- Loading states with subtle animations

**Truck Result Cards:**
- Dark surface cards with subtle borders
- Unique truck code in monospace font
- Status indicators using colored dots/badges
- Distance display with live updates
- Load status with icon representations

**Status Indicators:**
- Loaded: Green dot + truck icon
- Empty: Blue dot + empty truck icon
- Halted: Amber dot + pause icon
- Break: Amber dot + coffee icon
- Breakdown: Red dot + warning icon
- Repair: Red dot + wrench icon

### E. Animations
**Minimal Implementation:**
- Subtle hover effects on cards (slight scale/glow)
- Loading spinners for search results
- Smooth transitions for status changes
- No distracting background animations

## Special Considerations

**Mobile Optimization:**
- Stack search and results vertically
- Touch-friendly button sizes (min 44px)
- Readable text without zooming

**Data Visualization:**
- Real-time distance updates
- Clear status hierarchy
- Scannable truck listings
- Quick visual status recognition

**Indian Context:**
- Support for Indian zip code formats
- Regional language considerations for future
- Mobile-first approach for truck drivers

**Key Design Principles:**
1. **Clarity over creativity** - Information must be instantly scannable
2. **Status-first design** - Truck status should be immediately visible
3. **Professional aesthetics** - Build trust with small business owners
4. **Performance focus** - Fast loading for real-time data updates

## Images
No large hero image required. Focus on clean interface with truck/logistics icons and status indicators. Use SVG icons from Heroicons for all interface elements including truck representations, status symbols, and navigation icons.