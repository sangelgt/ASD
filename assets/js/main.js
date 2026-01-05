 feat-create-static-website-6544743807437363124
// Supabase initialization
const SUPABASE_URL = 'https://TU_PROJECT_URL.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY';

// Mock Supabase client for demonstration without real credentials
const supabase = {
  from: (tableName) => ({
    insert: (data) => {
      console.log(`Mock insert into ${tableName}:`, data);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful response
          resolve({ data: [data], error: null });
          // To test error handling, uncomment the line below
          // reject({ message: "Mock Supabase error" });
        }, 1000);
      });
    }
  })
};

document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('span');
        const updateTheme = (isDark) => {
            document.documentElement.classList.toggle('dark', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (themeIcon) themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        };

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

        updateTheme(isDark);

        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.classList.contains('dark');
            updateTheme(!isCurrentlyDark);
        });
    }

    // Active navigation link styling
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.remove('text-text-muted-light', 'dark:text-text-muted-dark');
            link.classList.add('text-primary', 'dark:text-primary-light', 'font-bold');
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Intersection Observer for animations
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });
    revealElements.forEach(el => observer.observe(el));

    // Form submission logic
    const contactForm = document.querySelector('form');
    if (contactForm) {
        const formId = contactForm.id;
        if (formId === 'contact-form' || formId === 'diagnostico-form' || formId === 'accesibilidad-form') {
            contactForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const statusMessage = document.createElement('p');
                statusMessage.id = 'form-status';
                contactForm.appendChild(statusMessage);

                submitButton.disabled = true;
                statusMessage.textContent = 'Enviando...';
                statusMessage.className = 'text-center mt-4';

                const formData = new FormData(contactForm);
                const formObject = Object.fromEntries(formData.entries());

                try {
                    const { data, error } = await supabase.from('contacts').insert([formObject]);

                    if (error) {
                        throw error;
                    }

                    statusMessage.textContent = '¡Mensaje enviado con éxito!';
                    statusMessage.className = 'text-center mt-4 text-green-500';
                    contactForm.reset();
                } catch (error) {
                    statusMessage.textContent = `Error al enviar: ${error.message}`;
                    statusMessage.className = 'text-center mt-4 text-red-500';
                } finally {
                    submitButton.disabled = false;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                }
            });
        }
    }

    // Accordion functionality for case studies
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(details => {
        details.addEventListener('toggle', function(event) {
            if (this.open) {
                detailsElements.forEach(otherDetails => {
                    if (otherDetails !== this) {
                        otherDetails.removeAttribute('open');
                    }
                });
            }
        });
    });
});

