
// Dark mode toggle logic
const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
function updateIcons(isDark) {
    themeToggleBtns.forEach(btn => {
        if(!btn) return;
        const icon = btn.querySelector('span');
        icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
}

function updateTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }
}
updateTheme();

themeToggleBtns.forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            updateIcons(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            updateIcons(true);
        }
    });
});

// Scroll Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .animate-entrance, .scroll-animate');
    revealElements.forEach(el => observer.observe(el));
});

// Supabase Integration
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Replace with your Supabase project URL and anon key
const SUPABASE_URL = 'https://TU_PROJECT_URL.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formInputs = form.querySelectorAll('input, select, textarea');
        let submission = {};

        formInputs.forEach(element => {
            submission[element.name] = element.value;
        });

        const { data, error } = await supabase
            .from('contacts')
            .insert([submission]);

        if (error) {
            alert('Hubo un error al enviar el formulario: ' + error.message);
        } else {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            form.reset();
        }
    });
}
