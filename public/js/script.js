/**
 * Triggers animations on scroll
 * by observing if the element is intersecting the view port.
 */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('initGallery');
    }
  });
});

const imgGallery = document.querySelectorAll('.image-wrapper');
imgGallery.forEach(el => observer.observe(el));
