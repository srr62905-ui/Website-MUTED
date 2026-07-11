/* ============================================
   MUTED TECHNOLOGY - JAVASCRIPT
   Interactions, Animations & Scroll Effects
   ============================================ */

// ============ LOADING SCREEN ============
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2.4 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.pointerEvents = 'none';
        }
    }, 2400);
});

// ============ CUSTOM CURSOR GLOW ============
const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;

// Activate mouse tracking on first move
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Move cursor glow
    if (cursorGlow) {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
    }
    
    // Activate cursor on first move
    if (!document.body.classList.contains('mouse-active')) {
        document.body.classList.add('mouse-active');
    }
});

// Hide cursor glow on mouse leave
document.addEventListener('mouseleave', function() {
    document.body.classList.remove('mouse-active');
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ SCROLL REVEAL ANIMATIONS ============
const revealElements = () => {
    const reveals = document.querySelectorAll('.glass-card, .team-card, .contact-item, .section-title');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('scroll-reveal');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealElements);

// Check on scroll
window.addEventListener('scroll', () => {
    revealElements();
});

// ============ MOUSE PARALLAX EFFECT ============
const hero = document.getElementById('hero');
const purifierImage = document.getElementById('purifierImage');

if (hero && purifierImage) {
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            const heroRect = hero.getBoundingClientRect();
            
            // Only apply parallax if mouse is over hero section
            if (e.clientY > heroRect.top && e.clientY < heroRect.bottom) {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                purifierImage.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
    });
}

// ============ BUTTON INTERACTIONS ============
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============ SCROLL TO CONTACT FUNCTION ============
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============ ACTIVE SECTION HIGHLIGHTING ============
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add any active state logic here if needed
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ============ CARD HOVER EFFECTS ============
const cards = document.querySelectorAll('.glass-card, .team-card, .contact-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease-in-out';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Optional: Add light reflection effect
        const gradientX = (x / rect.width) * 100;
        const gradientY = (y / rect.height) * 100;
        
        this.style.setProperty('--gradient-x', gradientX + '%');
        this.style.setProperty('--gradient-y', gradientY + '%');
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.removeProperty('--gradient-x');
        this.style.removeProperty('--gradient-y');
    });
});

// ============ PERFORMANCE OPTIMIZATION ============
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            revealElements();
            ticking = false;
        });
        ticking = true;
    }
}, false);

// ============ RESPONSIVE BEHAVIOR ============
let resizeTimer;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Re-check reveals on resize
        revealElements();
    }, 250);
});

// ============ NAVIGATION HIGHLIGHT ============
// Track current scroll position for potential future navbar
let currentSection = 'hero';

const updateCurrentSection = () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section.id;
        }
    });
};

window.addEventListener('scroll', updateCurrentSection);

// ============ ACCESSIBILITY IMPROVEMENTS ============
// Focus visible styles for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ============ PREFERS REDUCED MOTION ============
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable complex animations for accessibility
    document.documentElement.style.scrollBehavior = 'auto';
}

// ============ PERFORMANCE: DEBOUNCE FUNCTION ============
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============ LAZY LOAD IMAGES ============
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============ DYNAMIC TEXT COLOR BASED ON BACKGROUND ============
// This ensures text remains readable as it moves
const dynamicTextUpdate = () => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft && heroRight) {
        // Ensure proper contrast
        const textColor = getComputedStyle(heroLeft).color;
        // Add additional styling if needed
    }
};

window.addEventListener('load', dynamicTextUpdate);

// ============ FORM SUBMISSION HANDLING (For future use) ============
const handleContactSubmit = (e) => {
    if (e) {
        e.preventDefault();
        // Add form submission logic here
        console.log('Contact form submitted');
    }
};

// ============ ANALYTICS EVENT TRACKING (Optional) ============
const trackEvent = (eventName, eventData = {}) => {
    // Replace with your analytics provider
    console.log(`Event: ${eventName}`, eventData);
};

// Track button clicks
buttons.forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonText: this.textContent.trim()
        });
    });
});

// Track section views
const trackSectionView = (sectionId) => {
    trackEvent('section_view', { section: sectionId });
};

// ============ SCROLL PROGRESS INDICATOR (Optional) ============
const updateScrollProgress = () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // Update progress bar or indicator if exists
};

window.addEventListener('scroll', debounce(updateScrollProgress, 50));

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('Muted Technology - Premium Landing Website Initialized');
    
    // Initialize animations
    revealElements();
    updateScrollProgress();
    
    // Add any additional initialization here
});

// ============ PERFORMANCE MONITORING ============
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}

// ============ UTILITY FUNCTIONS ============

/**
 * Smooth color transition animation
 */
function animateColor(element, startColor, endColor, duration = 1000) {
    const start = Date.now();
    
    const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        
        // Simple color lerp (linear interpolation)
        // For production, use a color library
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    
    animate();
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Add scroll listener with throttle
 */
function addThrottledScrollListener(callback, delay = 100) {
    let lastCall = 0;
    
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastCall >= delay) {
            callback();
            lastCall = now;
        }
    });
}

// ============ ERROR HANDLING ============
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// ============ CLEANUP & MEMORY MANAGEMENT ============
window.addEventListener('beforeunload', function() {
    // Clean up event listeners if needed
    observer.disconnect();
    imageObserver?.disconnect?.();
});

// ============ END OF SCRIPT ============
