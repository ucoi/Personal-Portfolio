(function () {
  "use strict";

  const backToTopBtn = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");
  const navLinks = document.querySelectorAll(".nav-link");

  function handleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 100;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle links that start with #
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Close mobile menu after clicking
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      alert("Thank you for your message! I will get back to you soon.");

      contactForm.reset();
    });
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".project-card, .favorite-card, .timeline-item, .about-image-wrapper"
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

  function handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");

    if (window.pageYOffset > 50) {
      navbar.style.backgroundColor = "rgba(33, 37, 41, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.backgroundColor = "rgba(33, 37, 41, 1)";
      navbar.style.backdropFilter = "none";
    }
  }

  let scrollTimeout;
  window.addEventListener("scroll", function () {
    handleBackToTop();
    handleNavbarScroll();

    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(function () {
      updateActiveNavLink();
    });
  });

  const formInputs = document.querySelectorAll(".form-control");

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    handleBackToTop();
    handleNavbarScroll();
    updateActiveNavLink();
  });

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  console.log(
    "%c Portfolio Website Loaded Successfully! ",
    "background: #667eea; color: white; font-size: 16px; padding: 10px;"
  );
  console.log(
    "%c Built with ❤️ using Bootstrap 5 ",
    "background: #764ba2; color: white; font-size: 14px; padding: 8px;"
  );
})();
