# Aurea Nail Studio Website

A professional, fully responsive bilingual website for a nail studio in Fürstenfeld, Austria. Built from scratch using vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and GDPR compliance.

## Live Demo

- **Production:** [aureanailstudio.at](https://aureanailstudio.at)
- **Staging:** [GitHub Pages](https://auerBD.github.io/aureanailstudio-website/)

## Project Overview

This project was developed as a freelance commission for Aurea Nail Studio, a local nail salon in Austria. The client needed a modern, bilingual website to establish their online presence and attract new customers.

**Project Timeline:** March 2026  
**Role:** Solo Full-Stack Developer  
**Client:** Aurea Nail Studio, Fürstenfeld, Austria

## Features

### Core Functionality
- **Fully Responsive Design** - Mobile-first approach with custom breakpoints for mobile, tablet, and desktop
- **Bilingual Support** - Complete German and English versions with language switcher
- **Custom JavaScript Carousel** - 5-item carousel with touch support, no external libraries
- **Contact Form Integration** - GDPR-compliant form using Basin API with EU data residency
- **Interactive Gallery** - Responsive grid layout with hover effects
- **Mobile Navigation** - Custom hamburger menu with smooth animations
- **Custom 404 Pages** - Branded error pages in both languages

### Technical Features
- **Performance Optimized** - Compressed assets, optimized load times
- **SEO Optimized** - Meta tags, Open Graph
- **Accessibility Focused** - Semantic HTML, ARIA labels, keyboard navigation
- **GDPR Compliant** - Privacy policy, cookie-free analytics, consent management
- **Privacy-Friendly Analytics** - Plausible Analytics integration (no cookies required)

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **AOS** - animations

### Services & APIs
- **Basin** - Contact form handling (EU servers)
- **Plausible Analytics** - Privacy-friendly analytics
- **Google Fonts** - Yeseva One, Manrope

### Hosting & Deployment
- **Hetzner** - Production hosting (Germany, EU)
- **GitHub Pages** - Staging environment
- **Git** - Version control

## Project Structure

```
aureanailstudio-website/
├── index.html                 # German homepage
├── index-en.html             # English homepage
├── about.html / about-en.html
├── services.html / services-en.html
├── gallery.html / gallery-en.html
├── contact.html / contact-en.html
├── datenschutz.html / datenschutz-en.html  # Privacy policy
├── impressum.html / impressum-en.html      # Legal notice
├── 404.html / 404-en.html                  # Error pages
├── css/
│   └── style.css             # All styles (responsive)
├── js/
│   └── script.js             # Carousel, menu, form validation
├── images/                   # Optimized images
│   ├── logo.png
│   ├── hero images
│   ├── gallery images
│   └── service images
└── README.md
```

## Design

- **Typography:** Yeseva One (headings), Manrope (body)
- **Color Palette:** 
  - Primary: `#FFFFFF` (White)
  - Secondary: `#E8DDD5` (Beige)
  - Text: `#18181B` (Near Black)
  - Accent: `#BD9A89` (Rose Gold)
- **Design System:** Custom CSS with consistent spacing, typography scale, and reusable components

## Responsive Breakpoints

- **Mobile:** ≤ 768px
- **Tablet:** 769px - 1024px
- **Desktop:** > 1024px

## Performance

- **PageSpeed Score:** 95+ (target)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

### Optimization Techniques
- Image compression (TinyPNG)
- Minified CSS/JS
- Browser caching
- Gzip compression

## Privacy & Legal Compliance

### GDPR Compliance
- ✅ Complete privacy policy (DE/EN)
- ✅ Legal notice/Impressum (Austrian requirement)
- ✅ Data Processing Agreement with Hetzner
- ✅ EU-based data processing (Hetzner, Basin)
- ✅ Cookie-free analytics (Plausible)
- ✅ Contact form consent checkbox

### Data Processing Partners
- **Hetzner Online GmbH** - Hosting (Germany, EU)
- **Basin (UseBasin Inc.)** - Form processing (EU servers)
- **Plausible Insights OÜ** - Analytics (Estonia, EU)
- **Google Ireland Limited** - Fonts (Ireland, EU)

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Staging (GitHub Pages)
```bash
git add .
git commit -m "Update website"
git push origin main
```
GitHub Pages automatically deploys to staging environment.

### Production (Hetzner)
1. Test on staging environment
2. Compress all images
3. Update Basin form ID
4. Upload via FTP to Hetzner
5. Verify SSL certificate
6. Test all functionality

## Development Workflow

```bash
# Clone repository
git clone https://github.com/yourusername/aureanailstudio-website.git

# Navigate to project
cd aureanailstudio-website

# Open in browser (use local server)
python -m http.server 8000
# or
python3 -m http.server 8000

# Visit http://localhost:8000
```

## Configuration

### Basin Contact Form
1. Sign up at [usebasin.com](https://usebasin.com)
2. Create new form
3. Copy form endpoint
4. Update `contact.html` and `contact-en.html`:
```html
<form action="https://usebasin.com/f/YOUR_FORM_ID" method="POST">
```

### Plausible Analytics
1. Sign up at [plausible.io](https://plausible.io)
2. Add website domain
3. Add script to all HTML pages:
```html
<script defer data-domain="aureanailstudio.at" src="https://plausible.io/js/script.js"></script>
```

## Key Achievements

- ✅ Delivered fully functional bilingual website
- ✅ Achieved 95+ PageSpeed score
- ✅ Zero accessibility violations (WAVE)
- ✅ 100% GDPR compliant
- ✅ Mobile-first responsive design
- ✅ Custom JavaScript solutions (no jQuery/React needed)
- ✅ Production deployment on professional hosting

## Testing

### Manual Testing
- ✅ Tested on 8+ devices (mobile, tablet, desktop)
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Form submission testing
- ✅ Navigation testing (all links)
- ✅ Responsive design verification

### Automated Testing
- **Lighthouse** - Performance, Accessibility, Best Practices, SEO
- **WAVE** - Accessibility validation
- **PageSpeed Insights** - Performance metrics
- **W3C Validator** - HTML/CSS validation

## Project Metrics

- **Total Pages:** 16 (8 German + 8 English)
- **Lines of Code:** ~3,500
- **Development Time:** ~40 hours
- **Image Assets:** 25+ optimized images
- **Load Time:** <2 seconds

## Lessons Learned

### Technical
- Mobile-first CSS is essential for modern web development
- Vanilla JavaScript can handle complex interactions without frameworks
- GDPR compliance requires careful consideration of data flow
- Performance optimization significantly impacts user experience

### Client Communication
- Regular check-ins ensure alignment with client vision
- Clear documentation prevents misunderstandings
- Showing staging deployments helps clients visualize progress

### Challenges Overcome
- **Challenge:** Bilingual content management without CMS
  - **Solution:** Parallel HTML files with shared CSS/JS
  
- **Challenge:** GDPR compliance with contact forms
  - **Solution:** Basin API with EU servers and proper consent flow

- **Challenge:** Custom carousel without libraries
  - **Solution:** Vanilla JS with responsive breakpoint handling

## Future Enhancements

Potential features for future iterations:
- [ ] Customer review system
- [ ] Instagram feed integration
- [ ] Admin dashboard for content updates

## License

This is a private client project. All rights reserved.

## Developer

**Bence Daniel Auer**  
- Portfolio: [benceauer.at](https://benceauer.at)
- LinkedIn: [linkedin.com/in/bence-auer/](https://linkedin.com/in/bence-auer/)
- GitHub: [@auerBD](https://github.com/auerBD)
- Email: batfaib@gmail.com

## Acknowledgments

- Client: Bianca, Aurea Nail Studio
- Design: Figma mockups desigend by me
- Images: Client-provided photography

---

**Last Updated:** March 2026

*Built with ❤️ for beautiful websites*