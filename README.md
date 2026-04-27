# Personal Portfolio

A high-performance, responsive personal developer portfolio built with Vanilla web technologies (HTML5, CSS3, JavaScript) and an editorial-style design system.

## 🚀 Features

- **Custom Design System**: Built without frameworks, using strict CSS organization, fluid typography (`clamp()`), and CSS variables.
- **Dynamic Marquees**: Infinite sliding tech-stack marquee implemented with performant CSS animations.
- **Interactive Case Studies**: Built-in modal and lightbox components for viewing project details.
- **Real-Time Contact Form**: Integrated with EmailJS for serverless email forwarding.
- **No Dependencies**: 100% Vanilla JS and CSS for maximum performance and a perfect Lighthouse score.

## 🛠️ Architecture & Setup

This is a static site. No build process or package managers are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arslanhussain9/portfolio.git
   ```

2. **Serve locally:**
   You can use any local web server. For example:
   ```bash
   npx serve .
   ```

3. **Configure Contact Form:**
   To receive emails, set up a free [EmailJS](https://www.emailjs.com/) account.
   Update the keys in `js/env.js`:
   ```javascript
   window.ENV = {
     EMAILJS_SERVICE_ID: 'your_service_id',
     EMAILJS_TEMPLATE_ID: 'your_template_id',
     EMAILJS_PUBLIC_KEY: 'your_public_key'
   };
   ```

## 🌐 Deployment

This project is optimized for deployment on Vercel. A `vercel.json` file is included for clean URLs.
Just connect this repository to your Vercel account and deploy without any build commands.

---
*Designed & built by [Arslan Hussain](https://github.com/arslanhussain9).*
