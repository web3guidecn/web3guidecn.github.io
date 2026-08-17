document.addEventListener('click', function (event) {
  const link = event.target.closest('[data-cta-brand]');
  if (!link) return;

  const payload = {
    brand: link.dataset.ctaBrand,
    type: link.dataset.ctaType,
    position: link.dataset.ctaPosition,
    article: window.location.pathname
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', payload);
  }
});

