document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Dejar de observar una vez visible
      }
    });
  };

  const scrollObserver = new IntersectionObserver(animateOnScroll, {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% del elemento visible para activar
  });

  // Añadir clase para animar a los elementos que queremos que aparezcan
  // Ej: <section class="section animate-fade-in-up">...</section>
  // Ej: <div class="card animate-fade-in-up">...</div>
  document.querySelectorAll('.animate-fade-in-up').forEach(element => {
    scrollObserver.observe(element);
  });

  // Lógica para animaciones secuenciales dentro de un contenedor visible
  // Ej: cuando el padre `.is-visible`, los hijos `.animate-sequential-item` aparecen con un delay
  const sequentialObservers = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.animate-sequential-item');
        items.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.15}s`; // 150ms de delay por item
          item.classList.add('is-visible-sequential');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.sequential-parent').forEach(parent => {
    sequentialObservers.observe(parent);
  });
});