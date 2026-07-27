/* ============================================
   RETRO PORTFOLIO — INTERACTIVITY
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. TYPEWRITER EFFECT
  // ==========================================
  const typingElement = document.querySelector('.typing-text');
  const phrases = [
    'Full-Stack Developer',
    'Pixel Art Enthusiast',
    'Retro Tech Lover',
    'Code Artisan',
    'Creative Problem Solver'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      setTimeout(typeEffect, 2000);
      isPaused = false;
      return;
    }

    if (!isDeleting) {
      // Typing
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        // Pause at end
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 2000);
        return;
      }
      setTimeout(typeEffect, 80 + Math.random() * 50);
    } else {
      // Deleting
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
        return;
      }
      setTimeout(typeEffect, 30 + Math.random() * 20);
    }
  }

  setTimeout(typeEffect, 2000);

  // ==========================================
  // 2. SCROLL REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll(
    '.about-grid, .services-grid, .projects-grid, .testimonials-grid, .faq-list, .contact-wrapper, ' +
    '.about-terminal, .about-stats, .service-card, .project-card, .testimonial-card, .faq-item, ' +
    '.contact-form, .contact-info'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ==========================================
  // 3. STAT COUNTER ANIMATION
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number');

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        animateCounter(target, targetValue);
        statObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statObserver.observe(stat));

  function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const duration = 2000;
    const stepTime = duration / 40;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = current + '+';
    }, stepTime);
  }

  // ==========================================
  // 4. NAVBAR SCROLL EFFECT
  // ==========================================
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 5. MOBILE MENU TOGGLE
  // ==========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close button for mobile menu
  const navClose = document.querySelector('.nav-close');
  if (navClose) {
    navClose.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  }

  // ==========================================
  // 6. FAQ ACCORDION
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqQuestions.forEach(q => {
        q.parentElement.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ==========================================
  // 7. CONTACT FORM — EMAILJS INTEGRATION
  // ==========================================
  //
  // 🚀 TO SET UP LIVE EMAIL SENDING:
  //  1. Sign up free at https://www.emailjs.com
  //  2. Connect your email (Gmail, Outlook, etc.) as a Service
  //  3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}
  //  4. Get your Service ID, Template ID, and Public Key from the dashboard
  //  5. Paste them below ↓
  //
  const EMAILJS_CONFIG = {
    publicKey: 'MkUURWxpxYN4nvCyw',
    serviceID: 'service_wor9oht',
    templateID: 'template_q2olef9',
    toEmail: 'ctgseafood@gmail.com'
  };

  // Initialize EmailJS (only if public key is configured)
  if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = nameInput.parentElement.querySelector('.form-error');
    const emailError = emailInput.parentElement.querySelector('.form-error');
    const messageError = messageInput.parentElement.querySelector('.form-error');

    // Reset errors
    [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('error'));
    [nameError, emailError, messageError].forEach(el => el.classList.remove('visible'));

    let isValid = true;

    if (!name) {
      nameInput.classList.add('error');
      nameError.textContent = '> ERROR: Name is required!';
      nameError.classList.add('visible');
      isValid = false;
    }

    if (!email) {
      emailInput.classList.add('error');
      emailError.textContent = '> ERROR: Email is required!';
      emailError.classList.add('visible');
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      emailInput.classList.add('error');
      emailError.textContent = '> ERROR: Invalid email format!';
      emailError.classList.add('visible');
      isValid = false;
    }

    if (!message) {
      messageInput.classList.add('error');
      messageError.textContent = '> ERROR: Message is required!';
      messageError.classList.add('visible');
      isValid = false;
    }

    if (!isValid) return;

    // Disable form button
    const submitBtn = contactForm.querySelector('.form-submit');
    const formBody = contactForm.querySelector('.form-body');
    submitBtn.disabled = true;
    submitBtn.textContent = '[ SENDING... ]';

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      // Demo mode — show success message
      setTimeout(() => {
        formBody.innerHTML = `
          <div class="form-success">
            <p class="success-line">> Form submitted!</p>
            <p class="success-line">> Thanks, ${name}!</p>
            <br>
            <p class="success-note">
              [ DEMO MODE — Configure EmailJS in script.js to send live emails ]
            </p>
            <br>
            <button onclick="location.reload()" class="btn btn-secondary">
              [ SEND ANOTHER ]
            </button>
          </div>
        `;
      }, 1000);
      return;
    }

    try {
      // Send via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        {
          to_email: EMAILJS_CONFIG.toEmail,
          from_name: name,
          from_email: email,
          message: message,
          reply_to: email
        }
      );

      // Success!
      formBody.innerHTML = `
        <div class="form-success">
          <p class="success-line">> ✓ Message transmitted successfully!</p>
          <p class="success-line">> Thanks, ${name}! I'll get back to you faster than a 56k modem.</p>
          <br>
          <button onclick="location.reload()" class="btn btn-secondary">
            [ SEND ANOTHER ]
          </button>
        </div>
      `;
    } catch (error) {
      console.error('EmailJS error:', error);
      submitBtn.disabled = false;
      submitBtn.textContent = '[ SEND MESSAGE ]';

      // Show error
      const formError = document.createElement('div');
      formError.className = 'form-error visible';
      formError.textContent = '> ERROR: Failed to send. Please try again later.';
      formError.style.marginTop = '10px';
      formBody.appendChild(formError);
    }
  });

  // ==========================================
  // 8. FLOATING PARTICLES (Retro Dust)
  // ==========================================
  function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: ${['#33ff33', '#00ffff', '#ff00ff', '#ffb000'][Math.floor(Math.random() * 4)]};
        border-radius: 50%;
        pointer-events: none;
        opacity: ${Math.random() * 0.5 + 0.1};
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 10}s;
      `;
      hero.appendChild(particle);
    }
  }

  // Add particle styles dynamically
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
    @keyframes float-particle {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.4;
      }
      90% {
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(particleStyle);

  createParticles();

  // ==========================================
  // 9. MOUSE GLOW EFFECT (Retro cursor trail)
  // ==========================================
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  cursorGlow.style.cssText = `
    position: fixed;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(51, 255, 51, 0.06), transparent 70%);
    pointer-events: none;
    z-index: 9997;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursorGlow);

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  // ==========================================
  // 10. PARALLAX TILT ON PROJECT CARDS
  // ==========================================
  const projectCards = document.querySelectorAll('[data-tilt]');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ==========================================
  // 11. ACTIVE NAV LINK HIGHLIGHT
  // ==========================================
  const sections = document.querySelectorAll('.section, .hero');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--neon-cyan)'
        : '';
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ==========================================
  // 12. TERMINAL WELCOME MESSAGE (Console)
  // ==========================================
  console.log('%c╔══════════════════════════════════╗', 'color: #33ff33');
  console.log('%c║   WELCOME TO THE MATRIX         ║', 'color: #33ff33');
  console.log('%c║   ════════════════════════════  ║', 'color: #33ff33');
  console.log('%c║   Thanks for checking out my    ║', 'color: #33ff33');
  console.log('%c║   portfolio! 🕹️                 ║', 'color: #33ff33');
  console.log('%c╚══════════════════════════════════╝', 'color: #33ff33');

});
