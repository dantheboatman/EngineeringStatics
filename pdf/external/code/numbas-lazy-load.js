document.addEventListener('DOMContentLoaded', function() {
  // Select only Numbas iframes by class
  const numbasIframes = document.querySelectorAll('iframe.numbas-iframe');

  // Move src to data-src to prevent immediate loading
  numbasIframes.forEach(iframe => {
    if (iframe.src && !iframe.dataset.src) {
      iframe.dataset.src = iframe.src;
      iframe.removeAttribute('src');
      iframe.style.background = '#e1f0fc';
      iframe.setAttribute('loading', 'lazy');
    }
  });

  // Intersection Observer configuration
  const observerOptions = {
    root: null,
    rootMargin: '200px',  // Load 200px before entering viewport
    threshold: 0
  };

  const loadIframe = (iframe) => {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      iframe.removeAttribute('data-src');
      iframe.style.background = '';
    }
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadIframe(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all Numbas iframes
  numbasIframes.forEach(iframe => observer.observe(iframe));
});