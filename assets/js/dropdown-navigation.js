/**
 * Dropdown Navigation Toggle (works with Minimal Mistakes greedy-nav)
 */
(function () {
  // Toggle dropdowns on click (use capture so greedy-nav can't swallow it)
  document.addEventListener('click', function onToggle(e) {
    const toggle = e.target.closest(
      '.masthead__menu-item.has-dropdown > .dropdown-toggle'
    );
    if (!toggle) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const item = toggle.closest('.masthead__menu-item.has-dropdown');

    // close other open dropdowns
    document.querySelectorAll('.masthead__menu-item.dropdown-active')
      .forEach(el => { if (el !== item) el.classList.remove('dropdown-active'); });

    // toggle current
    item.classList.toggle('dropdown-active');

    // update ARIA
    toggle.setAttribute('aria-expanded', item.classList.contains('dropdown-active') ? 'true' : 'false');
  }, true); // <-- capture phase!

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.masthead__menu-item.has-dropdown')) {
      document.querySelectorAll('.masthead__menu-item.dropdown-active')
        .forEach(el => el.classList.remove('dropdown-active'));
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.masthead__menu-item.dropdown-active')
        .forEach(el => el.classList.remove('dropdown-active'));
    }
  });
})();
