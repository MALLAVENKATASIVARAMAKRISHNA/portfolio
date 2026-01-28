// Lock scroll during startup animation
window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, 3000);
});

// Scroll reveal
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));
