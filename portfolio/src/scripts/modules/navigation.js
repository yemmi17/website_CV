export function initNavigation() {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }