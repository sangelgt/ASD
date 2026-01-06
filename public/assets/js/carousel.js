document.addEventListener('DOMContentLoaded', () => {
  const setupCarousel = (carouselElement, slidesToShow = 4, autoPlayDelay = 3000) => {
    const track = carouselElement.querySelector('.carousel-track');
    if (!track) return;

    let slides = Array.from(track.children);
    const slideWidth = slides[0].offsetWidth; // Asume que todos tienen el mismo ancho
    let currentIndex = 0;
    let autoPlayInterval;

    // Clonar elementos para un carrusel infinito "suave"
    const cloneCount = slidesToShow * 2; // Suficientes clones para un loop visual
    for (let i = 0; i < cloneCount; i++) {
      track.appendChild(slides[i % slides.length].cloneNode(true));
    }
    slides = Array.from(track.children); // Actualizar la lista de slides

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      // Lógica para "teletransportar" el carrusel cuando llega al final de los clones
      if (currentIndex >= slides.length - slidesToShow) {
        setTimeout(() => {
          track.style.transition = 'none'; // Desactivar transición para el salto
          currentIndex = slidesToShow; // Saltar a la primera serie de clones reales
          track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
          setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out'; // Reactivar transición
          }, 50); // Pequeño delay para que el navegador registre el 'none'
        }, 500); // Esperar que la animación actual termine
      }
    };

    const startAutoPlay = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        currentIndex++;
        updateCarousel();
      }, autoPlayDelay);
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
    };

    // Eventos para pausar/reanudar al hover
    carouselElement.addEventListener('mouseenter', stopAutoPlay);
    carouselElement.addEventListener('mouseleave', startAutoPlay);

    // Inicializar y empezar auto-play
    updateCarousel();
    startAutoPlay();

    // Ajustar slides por vista en responsive
    window.addEventListener('resize', () => {
      const newSlidesToShow = window.innerWidth <= 768 ? 2 : slidesToShow;
      track.querySelectorAll('.carousel-slide').forEach(slide => {
        slide.style.width = `calc(100% / ${newSlidesToShow})`;
      });
      // Reiniciar carrusel para recalcular posiciones si es necesario
      currentIndex = 0; // O mantener la posición visualmente
      updateCarousel();
    });
  };

  // Inicializar carrusel en la sección de Socios Tecnológicos
  const partnersCarousel = document.querySelector('.partners-carousel');
  if (partnersCarousel) {
    setupCarousel(partnersCarousel); // Ajusta slidesToShow y autoPlayDelay si es necesario
  }
});