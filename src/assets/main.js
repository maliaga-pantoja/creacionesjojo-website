// ============================================================
// main.js — Lógica principal: animaciones de scroll,
//            scroll spy de navegación y toggle de tema.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------------------------
    // 1. Intersection Observer para animaciones fade-in-up
    // ----------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach((element) => {
        observer.observe(element);
    });

    // ----------------------------------------------------------
    // 2. Scroll Spy — resalta enlace activo en la navbar
    // ----------------------------------------------------------
    const navLinks = document.querySelectorAll('#navbar-links .nav-link');
    const secServices = document.getElementById('services');
    const secPortfolio = document.getElementById('portfolio');
    const secContacto = document.getElementById('contacto');

    function setActiveLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('text-[#bc13fe]', 'border-b-2', 'border-[#bc13fe]', 'pb-1');
            link.classList.add('text-[var(--text-muted)]', 'hover:text-[#bc13fe]', 'transition-colors', 'duration-200');
        });
        if (activeLink) {
            activeLink.classList.add('text-[#bc13fe]', 'border-b-2', 'border-[#bc13fe]', 'pb-1');
            activeLink.classList.remove('text-[var(--text-muted)]', 'hover:text-[#bc13fe]');
        }
    }

    function updateActiveOnScroll() {
        const scrollPos = window.scrollY + 150;

        if (secContacto && (scrollPos >= secContacto.offsetTop || (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50)) {
            setActiveLink(navLinks[3]);
        } else if (secPortfolio && scrollPos >= secPortfolio.offsetTop) {
            setActiveLink(navLinks[2]);
        } else if (secServices && scrollPos >= secServices.offsetTop) {
            setActiveLink(navLinks[1]);
        } else {
            setActiveLink(navLinks[0]); // Inicio
        }
    }

    window.addEventListener('scroll', updateActiveOnScroll);
    updateActiveOnScroll();

    // Clic directo en enlace de nav
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link);
        });
    });

    // ----------------------------------------------------------
    // 3. Theme Toggle
    // ----------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    function updateToggleIcon() {
        if (document.documentElement.classList.contains('dark')) {
            themeToggleIcon.textContent = 'light_mode';
            themeToggleBtn.setAttribute('title', 'Cambiar a modo claro');
        } else {
            themeToggleIcon.textContent = 'dark_mode';
            themeToggleBtn.setAttribute('title', 'Cambiar a modo oscuro');
        }
    }

    updateToggleIcon();

    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        updateToggleIcon();
    });

});
