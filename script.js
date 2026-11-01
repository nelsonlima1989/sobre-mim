/**
 * script.js - Interações do portfólio
 *
 * - Menu de navegação recolhível em telas pequenas (acessível por teclado)
 * - Destaque do link da seção visível (aria-current)
 * - Sombra do header ao rolar a página
 *
 * O scroll suave e o deslocamento sob o header fixo são feitos em CSS
 * (scroll-behavior e scroll-padding-top), respeitando prefers-reduced-motion.
 */

// Deve ser igual ao breakpoint de navegação em linha definido em style.css.
const DESKTOP_QUERY = '(min-width: 768px)';

// ========================================
// MENU MOBILE
// ========================================

/**
 * Menu recolhível para telas < 768px.
 * Botão com aria-expanded; Esc, clique em link, clique fora e saída do foco fecham o menu.
 */
function initMobileMenu() {
    const header = document.querySelector('.header');
    const toggle = header?.querySelector('.menu-toggle');
    const nav = header?.querySelector('.nav');
    if (!toggle || !nav) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);

    function setOpen(isOpen) {
        toggle.setAttribute('aria-expanded', String(isOpen));
        nav.classList.toggle('is-open', isOpen);
    }

    function isOpen() {
        return toggle.getAttribute('aria-expanded') === 'true';
    }

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen()) {
            setOpen(false);
            toggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (isOpen() && !header.contains(event.target)) setOpen(false);
    });

    header.addEventListener('focusout', (event) => {
        if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) {
            setOpen(false);
        }
    });

    // Ao ampliar a janela para o layout desktop, o estado do menu é reiniciado
    desktop.addEventListener('change', () => setOpen(false));
}

// ========================================
// LINK ATIVO NA NAVEGAÇÃO
// ========================================

/**
 * Marca com aria-current="true" o link da seção atualmente visível.
 */
function initActiveNavLink() {
    if (!('IntersectionObserver' in window)) return;

    const links = new Map();
    document.querySelectorAll('.nav__link[href^="#"]').forEach((link) => {
        links.set(link.getAttribute('href').slice(1), link);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link, id) => {
                if (id === entry.target.id) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    links.forEach((_, id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

/**
 * Adiciona a classe is-scrolled ao header ao rolar a página.
 */
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 10);

    update();
    window.addEventListener('scroll', update, { passive: true });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// O script é carregado com "defer": o DOM já está pronto aqui.
initMobileMenu();
initActiveNavLink();
initHeaderScrollEffect();
