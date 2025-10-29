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
        entry.target.style.transitionDelay = delay + 'ms';
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
      hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
  });

  // Add hover effect to feature cards
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
 * Animate terminal output
 */
function animateTerminal() {
  const lines = document.querySelectorAll('.terminal-line.output');
  lines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.animation = 'fadeIn 0.5s ease-out forwards';
    }, (index + 1) * 800);
  });
}
