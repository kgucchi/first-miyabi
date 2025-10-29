/**
 * Landing Page Script
 * Handles animations and interactions
 */

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Add staggered animation delay for feature cards
      if (entry.target.hasAttribute('data-delay')) {
        const delay = entry.target.getAttribute('data-delay');
        (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
      }
    }
  });
}, observerOptions);

// Observe all fade-in-up elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Terminal typing effect
  animateTerminal();

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero) {
      (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});

/**
 * Animate terminal output
 */
function animateTerminal() {
  const lines = document.querySelectorAll('.terminal-line.output');
  lines.forEach((line, index) => {
    (line as HTMLElement).style.opacity = '0';
    setTimeout(() => {
      (line as HTMLElement).style.opacity = '1';
      (line as HTMLElement).style.animation = 'fadeIn 0.5s ease-out forwards';
    }, (index + 1) * 800);
  });
}

/**
 * Add hover effect to feature cards
 */
document.addEventListener('DOMContentLoaded', () => {
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

/**
 * Scroll progress indicator (optional)
 */
function createScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.style.position = 'fixed';
  indicator.style.top = '0';
  indicator.style.left = '0';
  indicator.style.height = '3px';
  indicator.style.background = 'linear-gradient(90deg, #7C3AED, #A78BFA)';
  indicator.style.zIndex = '9999';
  indicator.style.transition = 'width 0.1s';
  document.body.appendChild(indicator);

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    indicator.style.width = `${scrollPercent}%`;
  });
}

// Uncomment to enable scroll indicator
// createScrollIndicator();

export {};
