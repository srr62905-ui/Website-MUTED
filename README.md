# 🚀 Muted Technology - Premium Landing Website

A futuristic, fully responsive single-page landing website for **Muted Technology**, a deep-tech startup focused on next-generation air purification technology.

## ✨ Features

### Design & Aesthetics
- **Premium & Minimal**: Apple × Tesla × Dyson inspired design language
- **Dark Gradient Background**: Sophisticated #050816 to #0B1120 gradient
- **Glassmorphism**: Frosted glass effect cards with backdrop blur
- **Smooth Animations**: 60fps performance optimized animations
- **Electric Blue Accent**: #00C8FF primary color with glowing effects
- **Professional Typography**: Space Grotesk (headings) + Inter (body)

### Interactive Elements
- ✅ **Custom Cursor Glow**: Glowing circular cursor that follows mouse movement
- ✅ **Mouse Parallax Effect**: Product image moves subtly with mouse position
- ✅ **Scroll Reveal Animations**: Elements fade in as you scroll
- ✅ **Floating Particles**: Animated background particles for depth
- ✅ **Loading Animation**: Elegant spinner on page load
- ✅ **Smooth Scrolling**: Butter-smooth page navigation
- ✅ **Hover Effects**: Glowing buttons and lifting cards
- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized

### Sections

1. **Hero Section (100vh)**
   - Animated logo and "Coming Soon" badge
   - Compelling headline and subtitle
   - CTA buttons (Contact Us, LinkedIn)
   - Floating product image with prototype badge
   - Animated background particles

2. **About Section**
   - Company mission and vision
   - Modern glassmorphism cards
   - Scroll-triggered animations

3. **Team Section**
   - Three leadership profile cards
   - CEO, CTO, COO positions
   - Hover animations with blue glow effect
   - Responsibility lists

4. **Contact Section**
   - Email, Phone, LinkedIn, Address
   - Interactive icon cards
   - Premium icon design

5. **Footer**
   - Company branding
   - Copyright information
   - Clean minimalist design

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with CSS variables, Grid, Flexbox
- **JavaScript (Vanilla)**: No frameworks or libraries required
- **Google Fonts**: Space Grotesk & Inter

## 📁 Project Structure

```
Website-MUTED/
├── index.html          # Main HTML file
├── style.css           # Complete styling
├── script.js           # JavaScript interactions
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Local Development
```bash
# Clone the repository
git clone https://github.com/srr62905-ui/Website-MUTED.git
cd Website-MUTED

# Open in your favorite code editor
code .

# Serve locally (using Python)
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

### Option 2: GitHub Codespaces
Click the button to open in GitHub Codespaces (provided in the repo)

### Option 3: Direct Browser
Simply open `index.html` in your modern web browser.

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #00C8FF;           /* Main accent color */
    --bg-dark: #050816;           /* Dark background */
    --bg-darker: #0B1120;         /* Darker background */
    --text-primary: #FFFFFF;      /* Primary text */
    --text-secondary: #B0B8D4;    /* Secondary text */
}
```

### Typography
```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Spacing & Animations
```css
--spacing-lg: 2rem;
--transition-smooth: 0.3s ease-in-out;
```

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|-----------|
| Desktop | > 1200px |
| Tablet | 768px - 1199px |
| Mobile | < 480px |

## ⚡ Performance Optimizations

- ✅ **Lazy Loading**: Images load on demand
- ✅ **Throttled Scroll**: Scroll events are throttled for performance
- ✅ **RequestAnimationFrame**: Smooth 60fps animations
- ✅ **CSS Animations**: Hardware-accelerated transforms
- ✅ **Minimal JavaScript**: Vanilla JS, no heavy dependencies
- ✅ **Prefers Reduced Motion**: Respects user accessibility preferences
- ✅ **Optimized Hover States**: Efficient cursor tracking

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus visible styles
- ✅ Color contrast compliance
- ✅ Reduced motion support
- ✅ Screen reader friendly

## 🔧 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Browsers | ✅ Latest |

## 📊 Key Features Implementation

### Custom Cursor Glow
```javascript
// Follows mouse movement with glowing effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', function(e) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});
```

### Mouse Parallax
```javascript
// Product image moves with mouse position
document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    purifierImage.style.transform = `translate(${x}px, ${y}px)`;
});
```

### Scroll Reveal Animations
```javascript
// Elements animate in as they enter viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
        }
    });
});
```

## 🎬 Animation Types

1. **Fade In**: Elements fade from transparent to visible
2. **Slide In**: Elements slide from off-screen into view
3. **Float**: Smooth up-down animation (hero product)
4. **Pulse**: Breathing effect on badges and glows
5. **Shine**: Light sweep animation on badges
6. **Spin**: Loading spinner rotation

## 📝 Content Management

To update content, edit `index.html`:

```html
<!-- Update Logo -->
<img src="your-logo-url" alt="Logo">

<!-- Update Headlines -->
<h1>Your Headline Here</h1>

<!-- Update Company Info -->
<p>Your description</p>

<!-- Update Contact Info -->
<a href="mailto:your-email@domain.com">Email</a>
```

## 🔗 Links to Update

- `mailto:hello@mutedtech.com` → Your email
- `tel:+919876543210` → Your phone
- LinkedIn URL → Your company profile
- Address → Your company address

## 📸 Image Placeholders

All images use placeholder URLs. Replace with your actual images:

```html
<!-- Logo -->
<img src="https://via.placeholder.com/50x50/00C8FF/050816?text=MT" alt="Logo">

<!-- Product Image -->
<img src="https://via.placeholder.com/400x500/1a1a2e/00C8FF?text=Purifier+V1" alt="Product">

<!-- Team Avatars -->
<img src="https://via.placeholder.com/120x120/00C8FF/050816?text=CEO" alt="CEO">
```

## 🎯 Investor-Ready Features

- ✅ Premium, minimal aesthetic
- ✅ Professional typography and spacing
- ✅ Clear call-to-action buttons
- ✅ Team leadership showcase
- ✅ Multiple contact methods
- ✅ Modern glassmorphism design
- ✅ Smooth, polished interactions
- ✅ Fast loading performance

## 🐛 Troubleshooting

### Cursor glow not showing
- Check if JavaScript is enabled
- Verify `cursor-glow` element exists in HTML
- Check browser console for errors

### Animations stuttering
- Close background applications
- Check browser performance settings
- Try disabling browser extensions

### Images not loading
- Replace placeholder URLs with actual image URLs
- Ensure CORS headers are set correctly
- Use relative paths for local images

## 📚 Learning Resources

- [CSS Glassmorphism](https://glassmorphism.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [JavaScript Mouse Events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Share your modifications

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or support, please reach out:
- Email: hello@mutedtech.com
- LinkedIn: Muted Technology

## 🙏 Credits

Designed and developed with ❤️ for Muted Technology.

Inspired by:
- Apple's minimalist design
- Tesla's futuristic aesthetic
- Dyson's engineering excellence
- Nothing's innovative approach

---

**Made with 💙 for premium deep-tech companies**

**Last Updated**: July 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
