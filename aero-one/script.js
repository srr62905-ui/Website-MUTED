/* ============================================
   MUTED AERO ONE - JAVASCRIPT
   Premium Interactions & Smooth Animations
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

// Track mouse movement
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Move cursor glow with smooth animation
    if (cursorGlow) {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
    }
    
    // Activate cursor on first move
    if (!document.body.classList.contains('mouse-active')) {
        document.body.classList.add('mouse-active');
    }
});

// Hide cursor glow on mouse leave window
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

// ============ MOUSE PARALLAX EFFECT ============
const hero = document.getElementById('hero');
const productImage = document.getElementById('productImage');

if (hero && productImage) {
    document.addEventListener('mousemove', function(e) {
        // Only apply parallax on desktop
        if (window.innerWidth > 768) {
            const heroRect = hero.getBoundingClientRect();
            
            // Only apply if mouse is over hero section
            if (e.clientY > heroRect.top && e.clientY < heroRect.bottom) {
                const x = (e.clientX / window.innerWidth - 0.5) * 25;
                const y = (e.clientY / window.innerHeight - 0.5) * 25;
                
                productImage.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
    });
}

// ============ BUTTON INTERACTIONS ============
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('click', function() {
        const buttonId = this.id;
        if (buttonId === 'notifyBtn') {
            handleNotifyClick();
        } else if (buttonId === 'contactBtn') {
            handleContactClick();
        }
    });
});

// ============ NOTIFY ME FUNCTIONALITY ============
function handleNotifyClick() {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Add visual feedback
    const notifyBtn = document.getElementById('notifyBtn');
    if (notifyBtn) {
        const originalText = notifyBtn.innerHTML;
        notifyBtn.innerHTML = '<span class="btn-text">✓ Notification Set</span>';
        
        setTimeout(() => {
            notifyBtn.innerHTML = originalText;
        }, 2000);
    }
}

// ============ CONTACT US FUNCTIONALITY ============
function handleContactClick() {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============ SCROLL ANIMATIONS ============
const revealElements = () => {
    const elements = document.querySelectorAll('.contact-card, .contact-header');
    
    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check
window.addEventListener('load', revealElements);

// Check on scroll with throttle
let lastScrollCheck = 0;
window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollCheck > 100) {
        revealElements();
        lastScrollCheck = now;
    }
});

// ============ CARD HOVER EFFECTS ============
const contactCard = document.querySelector('.contact-card');

if (contactCard) {
    contactCard.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate gradient position
        const gradientX = (x / rect.width) * 100;
        const gradientY = (y / rect.height) * 100;
        
        this.style.setProperty('--gradient-x', gradientX + '%');
        this.style.setProperty('--gradient-y', gradientY + '%');
    });
    
    contactCard.addEventListener('mouseleave', function() {
        this.style.removeProperty('--gradient-x');
        this.style.removeProperty('--gradient-y');
    });
}

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
        // Reset parallax on resize
        if (productImage) {
            productImage.style.transform = 'translate(0, 0)';
        }
        revealElements();
    }, 250);
});

// ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ============ ACCESSIBILITY - KEYBOARD NAVIGATION ============
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
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ============ UTILITY FUNCTIONS ============

/**
 * Debounce function for performance
 */
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
 * Add throttled scroll listener
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

// ============ EVENT TRACKING ============
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics provider
    console.log(`Event: ${eventName}`, eventData);
}

// Track button clicks
buttons.forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonId: this.id,
            buttonText: this.textContent.trim()
        });
    });
});

// Track section views
window.addEventListener('scroll', debounce(function() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            trackEvent('section_view', {
                sectionId: section.id
            });
        }
    });
}, 500));

// ============ SCROLL PROGRESS ============
const updateScrollProgress = () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // Can be used to update a progress bar if added to HTML
};

window.addEventListener('scroll', debounce(updateScrollProgress, 50));

// ============ CONTACT LINK INTERACTIONS ============
const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(4px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ============ LINKEDIN BUTTON ============
const linkedinBtn = document.querySelector('.linkedin-btn');

if (linkedinBtn) {
    linkedinBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    linkedinBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
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
    observer.disconnect();
});

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('Muted Aero One - Premium Landing Page Initialized');
    
    // Initialize animations
    revealElements();
    updateScrollProgress();
    
    // Add scroll reveal initial state
    const revealElements_initial = document.querySelectorAll('.contact-card, .contact-header');
    revealElements_initial.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
});

// ============ PERFORMANCE MONITORING ============
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}

// ============ LAZY LOAD IMAGES ============
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
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

// ============ END OF SCRIPT ============
