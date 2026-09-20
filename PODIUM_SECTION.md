# Podium Section - Documentation

## Overview
The Podium section showcases the ₹75K+ prize pool for Shivotsav '26, positioned between the About and Events sections. It's designed with the "Mythos: The Legend Awakens" theme in mind, featuring mythological aesthetics and divine visual elements.

## Features

### 1. **Prize Pool Banner**
- Large animated counter showing ₹75,000+ total prize pool
- Animated number that counts up when scrolled into view
- Divine radiance effects with gold and red gradients
- Sparkle icons for mythological feel

### 2. **Victory Rewards (Cash Prizes)**
Five cash prize categories displayed in card format:

| Award | Amount | Icon | Special Features |
|-------|--------|------|------------------|
| Overall Best College | ₹10,000 | Crown | Gold gradient, #1 badge |
| Overall Best College 1st Runner Up | ₹7,500 | Trophy | Silver gradient, #2 badge |
| Overall Best College 2nd Runner Up | ₹5,000 | Trophy | Bronze gradient, #3 badge |
| Best Contingent Leader | ₹2,000 | Award | Purple gradient |
| Best PR | ₹2,000 | Award | Pink gradient |

Each card features:
- Hover animations (scale, glow effects)
- Gradient backgrounds matching rank/category
- Icon animations on hover
- Responsive design (1-column mobile, 2-column tablet, 3-column desktop)

### 3. **Championship Trophies**
Five department trophies with no cash value, displayed as category cards:

| Trophy | Icon | Color | Description |
|--------|------|-------|-------------|
| Performing Arts | 🎭 | Purple | Dance, Music, Drama |
| Fine Arts | 🎨 | Pink | Painting, Sculpture, Design |
| Literary Arts | 📚 | Blue | Poetry, Debate, Writing |
| Informals | 🎪 | Green | Fun Events & Activities |
| Sports & Gaming | 🏆 | Orange | Athletics & E-Sports |

Features:
- Emoji icons with shadow/glow effects
- Color-coded by category (matches event filters)
- Animated hover effects (scale, rotation)
- Responsive grid (1-column mobile, 2-column tablet, 5-column desktop)

## Design Elements

### Theme Integration
- **Mythological Background**: Radial gradients simulating divine light
- **Floating Particles**: 20 animated gold particles for ethereal atmosphere
- **Dark Background**: Deep navy gradient (#050812 to navy-900)
- **Gold Accents**: Consistent with site's gold theme

### Animations
- **Scroll Reveal**: Uses `useScrollReveal` hook for entrance animations
- **Number Counter**: Animated count-up effect for prize pool
- **Hover Effects**: 
  - Card lift (translateY + scale)
  - Icon rotation and scale
  - Glow intensity changes
  - Border color transitions
- **Floating Elements**: CSS keyframe animations for particles

### Responsive Design
- **Mobile (< 640px)**: Single column layout, reduced padding
- **Tablet (640px - 1024px)**: 2-column grid for awards
- **Desktop (> 1024px)**: 3-column awards, 5-column trophies
- **Spacing**: Follows site's section-padding utility (4rem mobile, 6rem desktop)

## Technical Implementation

### Components Structure
```
Podium.jsx
├── Main Section Container
├── Background Effects Layer
│   ├── Divine Radiance Glow
│   ├── Side Ambient Glows
│   └── Floating Particles (20x)
├── Prize Pool Banner
│   └── AnimatedNumber Component
├── Victory Rewards Section
│   └── AwardCard Component (5x)
├── Championship Trophies Section
│   └── TrophyCard Component (5x)
└── Bottom CTA Message
```

### Key Dependencies
- `lucide-react`: Icons (Trophy, Crown, Award, Sparkles)
- `useScrollReveal`: Custom hook for scroll animations
- `SectionHeading`: Reusable heading component

### CSS Classes Used
- `glass-card`: Glass morphism effect
- `gradient-text-gold`: Gold gradient text
- `section-padding`: Standard section spacing
- `animate-float`: Floating animation
- Custom inline styles for dynamic colors

## Navigation
The Podium section has been added to the navbar between "About" and "Events" for easy access.

## Performance Considerations
- Images: None (uses icons and gradients)
- Animations: RequestAnimationFrame for smooth 60fps counter
- Intersection Observer: Triggers counter only when visible
- Lazy rendering: Particles generated on mount, not re-rendered

## Future Enhancements
Consider adding:
- Trophy 3D models or custom illustrations
- Confetti animation on prize pool reveal
- Individual event prize breakdowns modal
- Past winners showcase
- Live leaderboard integration during the fest

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for backdrop-filter (glass effects)
- CSS Grid with graceful degradation
- Touch-friendly hover states on mobile
