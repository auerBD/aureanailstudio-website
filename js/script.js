// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');

if (carouselTrack && slides.length > 0) {

  let currentIndex = 0;
  const totalSlides = slides.length;
  let slidesVisible = 1;

  function getSlidesVisible() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const slideWidth = slides[0].offsetWidth + 32;
    slidesVisible = Math.round(wrapper.offsetWidth / slideWidth);
    if (slidesVisible < 1) slidesVisible = 1;
  }

  function getMaxIndex() {
    return totalSlides - slidesVisible;
  }

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 32;
    const offset = -currentIndex * slideWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    getSlidesVisible();
    const maxIndex = getMaxIndex();

    if (currentIndex >= maxIndex) {
      currentIndex = 0; // loop back
    } else {
      currentIndex++;
    }

    updateCarousel();
  }

  function prevSlide() {
    getSlidesVisible();
    const maxIndex = getMaxIndex();

    if (currentIndex <= 0) {
      currentIndex = maxIndex; // jump to end
    } else {
      currentIndex--;
    }

    updateCarousel();
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  window.addEventListener('resize', () => {
    getSlidesVisible();
    if (currentIndex > getMaxIndex()) {
      currentIndex = getMaxIndex();
    }
    updateCarousel();
  });

  getSlidesVisible();
  updateCarousel();
}

// Custom form validation messages
document.addEventListener('DOMContentLoaded', function() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const messageInput = form.querySelector('textarea[name="message"]');
        const consentCheckbox = form.querySelector('input[name="consent"]');
        
        // Detect language from HTML lang attribute
        const isGerman = document.documentElement.lang === 'de';
        
        // Custom messages
        const messages = {
            de: {
                name: 'Bitte gib deinen Namen ein.',
                email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
                message: 'Bitte schreib eine Nachricht.',
                consent: 'Bitte akzeptiere die Datenschutzerklärung.'
            },
            en: {
                name: 'Please enter your name.',
                email: 'Please enter a valid email address.',
                message: 'Please write a message.',
                consent: 'Please accept the privacy policy.'
            }
        };
        
        const lang = isGerman ? 'de' : 'en';
        
        // Set custom validation messages
        if (nameInput) {
            nameInput.addEventListener('invalid', function() {
                this.setCustomValidity(messages[lang].name);
            });
            nameInput.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        }
        
        if (emailInput) {
            emailInput.addEventListener('invalid', function() {
                if (this.validity.valueMissing) {
                    this.setCustomValidity(messages[lang].email);
                } else if (this.validity.typeMismatch) {
                    this.setCustomValidity(messages[lang].email);
                }
            });
            emailInput.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        }
        
        if (messageInput) {
            messageInput.addEventListener('invalid', function() {
                this.setCustomValidity(messages[lang].message);
            });
            messageInput.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        }
        
        if (consentCheckbox) {
            consentCheckbox.addEventListener('invalid', function() {
                this.setCustomValidity(messages[lang].consent);
            });
            consentCheckbox.addEventListener('change', function() {
                this.setCustomValidity('');
            });
        }
    });
});