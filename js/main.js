/* ================================================
   JASPREET KAUR — PORTFOLIO
   Interactions: particles, typewriter, counters,
   scroll reveal, filters, modal, proficiency bars,
   mobile nav, back-to-top, contact form
   ================================================ */

(function () {
  'use strict';

  /* ============================= REDUCED MOTION CHECK ============================= */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================= DOM REFS ============================= */
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const allNavLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const backToTop = document.getElementById('back-to-top');
  const floatingContact = document.getElementById('floating-contact');
  const typewriterEl = document.getElementById('typewriter');

  /* ============================= PARTICLE NETWORK ============================= */
  (function initParticles() {
    if (prefersReducedMotion) return;

    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, particles, animId;
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 150;
    const PARTICLE_SPEED = 0.3;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * PARTICLE_SPEED,
          vy: (Math.random() - 0.5) * PARTICLE_SPEED,
          radius: Math.random() * 2 + 1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.strokeStyle = 'rgba(0, 200, 224, ' + opacity + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 200, 224, 0.4)';
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', function () {
      resize();
      createParticles();
    });
  })();

  /* ============================= TYPEWRITER ============================= */
  (function initTypewriter() {
    if (!typewriterEl) return;

    const words = ['Python Developer', 'AI/ML Engineer', 'Computer Vision Specialist', 'LLM Builder'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const TYPING_SPEED = 80;
    const DELETE_SPEED = 50;
    const PAUSE_AFTER_WORD = 2500;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? DELETE_SPEED : TYPING_SPEED;

      if (!isDeleting && charIndex === currentWord.length) {
        delay = PAUSE_AFTER_WORD;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }

      setTimeout(type, prefersReducedMotion ? 0 : delay);
    }

    // Start after a short delay
    if (prefersReducedMotion) {
      typewriterEl.textContent = words[0];
    } else {
      setTimeout(type, 800);
    }
  })();

  /* ============================= NAVBAR SCROLL ============================= */
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ============================= MOBILE NAV ============================= */
  var overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function openMobileNav() {
    navLinks.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', function () {
    navLinks.classList.contains('open') ? closeMobileNav() : openMobileNav();
  });
  overlay.addEventListener('click', closeMobileNav);
  allNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  /* ============================= SMOOTH SCROLL ============================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ============================= ACTIVE NAV LINK ============================= */
  function updateActiveLink() {
    var scrollPos = window.scrollY + 150;
    var current = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });
    allNavLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ============================= SCROLL REVEAL ============================= */
  function setupScrollReveal() {
    var revealElements = document.querySelectorAll('.reveal, .reveal-hero');

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealElements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  }
  setupScrollReveal();

  /* ============================= STAT COUNTER ANIMATION ============================= */
  (function initCounters() {
    var counters = document.querySelectorAll('.hero-stat__number[data-count]');
    if (!counters.length) return;

    if (prefersReducedMotion) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count');
      });
      return;
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        // Ease in-out
        var eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  })();

  /* ============================= PROFICIENCY BARS ============================= */
  (function initProficiencyBars() {
    var bars = document.querySelectorAll('.prof-bar__fill[data-width]');
    if (!bars.length) return;

    // Set CSS custom property for width
    bars.forEach(function (bar) {
      bar.style.setProperty('--fill-width', bar.getAttribute('data-width') + '%');
    });

    if (prefersReducedMotion) {
      bars.forEach(function (bar) { bar.classList.add('animated'); });
      return;
    }

    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    bars.forEach(function (bar) { barObserver.observe(bar); });
  })();

  /* ============================= BACK TO TOP + FLOATING CONTACT ============================= */
  function handleFloatingElements() {
    var y = window.scrollY;
    if (y > 600) {
      backToTop.classList.add('visible');
      if (floatingContact) floatingContact.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
      if (floatingContact) floatingContact.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleFloatingElements, { passive: true });
  handleFloatingElements();

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================= EXPERIENCE TIMELINE ============================= */
  // Accordion expand/collapse
  document.querySelectorAll('.timeline__card[role="button"]').forEach(function (card) {
    card.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Experience filter tabs
  var expFilterBtns = document.querySelectorAll('#exp-filters .filter-tab');
  var timelineItems = document.querySelectorAll('.timeline__item[data-categories]');

  expFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      expFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      timelineItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-categories').indexOf(filter) !== -1) {
          item.classList.remove('filtered-out');
        } else {
          item.classList.add('filtered-out');
        }
      });
    });
  });

  /* ============================= PROJECT FILTERS ============================= */
  var projFilterBtns = document.querySelectorAll('#proj-filters .filter-tab');
  var projectCards = document.querySelectorAll('.project-card[data-categories]');

  projFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      projFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-categories').indexOf(filter) !== -1) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });

  /* ============================= SKILLS FILTER ============================= */
  var skillsFilterBtns = document.querySelectorAll('#skills-tabs .filter-tab');
  var skillPills = document.querySelectorAll('.skill-pill[data-category]');

  skillsFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      skillsFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      skillPills.forEach(function (pill) {
        if (filter === 'all' || pill.getAttribute('data-category') === filter) {
          pill.classList.remove('filtered-out');
        } else {
          pill.classList.add('filtered-out');
        }
      });
    });
  });

  /* ============================= PROJECT MODAL ============================= */
  var modalOverlay = document.getElementById('project-modal');
  var modalClose = document.getElementById('modal-close');
  var modalTitle = document.getElementById('modal-title');
  var modalCompany = document.getElementById('modal-company');
  var modalBadge = document.getElementById('modal-badge');
  var modalImpact = document.getElementById('modal-impact');
  var modalDesc = document.getElementById('modal-desc');
  var modalTags = document.getElementById('modal-tags');

  // Project data
  var projectData = {
    '1': {
      title: 'Canadian Stock Price',
      company: 'Independent AI Project',
      badge: 'High Impact Prediction Model',
      impact: { number: '85%', label: 'directional accuracy in backtesting' },
      desc: 'Developed a robust time-series forecasting model using Python and LSTMs to predict trends in the Canadian stock market. The project involved custom ETL pipelines for financial data, feature engineering with technical indicators, and hyperparameter tuning to handle market volatility. Achieved significant predictive power across multiple sectors.',
      tags: ['Python', 'TensorFlow', 'LSTMs', 'Pandas', 'Scikit-learn', 'Time-Series']
    },
    '2': {
      title: 'Home Depot Product Search Relevance',
      company: 'NLP Optimization Project',
      badge: 'NLP / Search Optimization',
      impact: { number: '12%', label: 'reduction in Root Mean Squared Error (RMSE)' },
      desc: 'Optimized product search relevance for the Home Depot dataset using Natural Language Processing. Implemented a pipeline using BERT embeddings and cosine similarity to match search queries with product descriptions. Developed an ensemble model that significantly improved search accuracy and retrieval relevance.',
      tags: ['Python', 'BERT', 'NLP', 'Gensim', 'NLTK', 'Scikit-learn']
    },
    '3': {
      title: 'Power BI KPI Dashboard Suite',
      company: 'Concentrix',
      badge: '',
      impact: { number: '98%', label: 'reduction in manual Excel reporting effort' },
      desc: 'Designed and built multi-level dashboards using Power BI connected to Salesforce Connex for real-time KPI tracking. Dashboards cover daily follow-ups, overdue tasks, and open tickets with views at user, department, and manager levels. This eliminated nearly all manual Excel-based reporting.',
      tags: ['Power BI', 'Salesforce Connex', 'Excel', 'SQL', 'Data Visualization']
    },
    '4': {
      title: 'Games IMDB Project',
      company: 'Personal Project',
      badge: 'Django Fullstack',
      impact: { number: 'Full', label: 'CRUD Capability' },
      desc: 'A robust game discovery and rating platform built with Python and Django. This project features a full CRUD system, allowing users to browse a vast database of games, leave technical reviews, and rate titles based on gameplay mechanics. Implemented with PostgreSQL for complex queries and Bootstrap for a responsive UI.',
      tags: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Web Dev']
    },
    '5': {
      title: 'IELTS Exam Prep App',
      company: 'Independent Project',
      badge: 'React + Python',
      impact: { number: 'AI', label: 'Powered Prep' },
      desc: 'A high-performance exam preparation application built with a React frontend and a Python (FastAPI) backend. The app provides students with interactive IELTS modules, automated scoring systems, and real-time progress tracking. Leveraged modern state management and asynchronous processing for a seamless user experience.',
      tags: ['Python', 'React', 'FastAPI', 'Vite', 'EdTech']
    }
  };

  var lastFocusedElement = null;

  function openModal(projectId) {
    var data = projectData[projectId];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    modalTitle.textContent = data.title;
    modalCompany.textContent = data.company;
    modalBadge.textContent = data.badge;
    modalBadge.style.display = data.badge ? 'block' : 'none';
    modalDesc.textContent = data.desc;

    if (data.impact) {
      modalImpact.innerHTML =
        '<span class="project-card__impact-number">' + data.impact.number + '</span>' +
        '<span class="project-card__impact-label">' + data.impact.label + '</span>';
      modalImpact.style.display = 'block';
    } else {
      modalImpact.style.display = 'none';
    }

    modalTags.innerHTML = data.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join('');

    modalOverlay.removeAttribute('hidden');
    // Force reflow before adding class for animation
    void modalOverlay.offsetHeight;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    setTimeout(function () { modalClose.focus(); }, 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () {
      modalOverlay.setAttribute('hidden', '');
    }, 250);
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // Open modal on "View Details" click
  document.querySelectorAll('.project-card__btn[data-project]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(this.getAttribute('data-project'));
    });
  });

  // Close modal
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Focus trap inside modal
  modalOverlay.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusable = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ============================= CONTACT FORM ============================= */
  if (contactForm) {
    var nameInput = document.getElementById('contact-name');
    var emailInput = document.getElementById('contact-email');
    var subjectInput = document.getElementById('contact-subject');
    var messageInput = document.getElementById('contact-message');
    var submitBtn = document.getElementById('contact-submit');

    // Inline validation on blur
    nameInput.addEventListener('blur', function () { validateField('name'); });
    emailInput.addEventListener('blur', function () { validateField('email'); });
    subjectInput.addEventListener('blur', function () { validateField('subject'); });
    messageInput.addEventListener('blur', function () { validateField('message'); });

    function validateField(field) {
      var errorEl, value, valid;
      switch (field) {
        case 'name':
          errorEl = document.getElementById('name-error');
          value = nameInput.value.trim();
          valid = value.length >= 2;
          errorEl.textContent = valid ? '' : 'Name must be at least 2 characters';
          break;
        case 'email':
          errorEl = document.getElementById('email-error');
          value = emailInput.value.trim();
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          errorEl.textContent = valid ? '' : 'Please enter a valid email';
          break;
        case 'subject':
          errorEl = document.getElementById('subject-error');
          value = subjectInput.value;
          valid = value !== '';
          errorEl.textContent = valid ? '' : 'Please select a subject';
          break;
        case 'message':
          errorEl = document.getElementById('message-error');
          value = messageInput.value.trim();
          valid = value.length >= 20;
          errorEl.textContent = valid ? '' : 'Message must be at least 20 characters';
          break;
      }
      if (errorEl) {
        errorEl.classList.toggle('visible', !valid);
      }
      return valid;
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid =
        validateField('name') &
        validateField('email') &
        validateField('subject') &
        validateField('message');

      if (!isValid) {
        showFormStatus('Please fix the errors above.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm),
      })
        .then(function (response) {
          if (response.ok) {
            showFormStatus("Message sent! I'll get back to you within 24 hours. 🎉", 'success');
            contactForm.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          showFormStatus(
            'Oops — something went wrong. Please email me at jaspreetbarnala0123@gmail.com',
            'error'
          );
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML =
            'Send Message <svg class="btn__arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        });
    });
  }

  function showFormStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = 'form-status ' + type;
    if (type === 'success') {
      setTimeout(function () {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }, 6000);
    }
  }

  /* ============================= STAGGER SKILL PILLS ============================= */
  document.querySelectorAll('.skill-pill').forEach(function (pill, i) {
    pill.style.transitionDelay = (i * 0.03) + 's';
  });

})();
