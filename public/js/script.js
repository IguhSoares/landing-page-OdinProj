/**
 * Triggers animations on scroll
 * by observing if the element is intersecting the view port.
 */
const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('initGallery');
    }
  });
});

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    }
  });
});

const imgGallery = document.querySelectorAll('.image-wrapper');
imgGallery.forEach(el => galleryObserver.observe(el));
galleryObserver.observe(document.querySelector('#content h2'));

['.quote-text', '.quote-author', '#cta', 'footer'].forEach(el => {
  fadeInObserver.observe(document.querySelector(el));
});
