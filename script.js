/**
 * script.js - Funcionalidades JavaScript para o portfólio
 * Versão inicial: funcionalidades básicas apenas
 */

// ========================================
// UTILITÁRIOS
// ========================================

/**
 * Verifica se o usuário prefere movimento reduzido
 * @returns {boolean}
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll suave para elemento (fallback para navegadores sem suporte nativo)
 * @param {string} targetId - ID do elemento alvo (ex: '#sobre')
 */
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    if (prefersReducedMotion()) {
        window.scrollTo(0, targetPosition);
        return;
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ========================================
// NAVEGAÇÃO SUAVE
// ========================================

/**
 * Inicializa navegação suave para links internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                smoothScrollTo(targetId);

                // Atualiza URL sem recarregar
                history.pushState(null, '', targetId);

                // Foco para acessibilidade
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

/**
 * Adiciona sombra ao header ao rolar a página
 */
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    const threshold = 10;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > threshold) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    }

    // Throttle para performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

/**
 * Inicializa todas as funcionalidades
 */
function init() {
    // Aguarda DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    initSmoothScroll();
    initHeaderScrollEffect();

    // Log de inicialização (apenas desenvolvimento)
    console.log('Portfólio inicializado com sucesso.');
}

// Inicia a aplicação
init();

// ========================================
// EXPORTAÇÕES PARA FUTURAS ETAPAS
// ========================================

// Funções que serão expandidas nas próximas etapas:
// - initThemeToggle() - Alternância de tema claro/escuro
// - initMobileMenu() - Menu hambúrguer para mobile
// - initAnimations() - Animações de entrada (IntersectionObserver)
// - initProjectFilters() - Filtros de projetos (se aplicável)

window.Portfolio = {
    smoothScrollTo,
    prefersReducedMotion
};