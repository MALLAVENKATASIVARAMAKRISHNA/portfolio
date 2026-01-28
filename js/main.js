// LOCK SCROLL DURING STARTUP
window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, 3000);
});

// SCROLL REVEAL
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));

// CONTACT MODAL
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeContact = document.getElementById("closeContact");

contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

closeContact.addEventListener("click", () => {
  contactModal.style.display = "none";
});

contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});
