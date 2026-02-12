// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal
const items = document.querySelectorAll("[data-reveal]");
items.forEach((el) => {
  const delay = el.getAttribute("data-delay");
  if (delay) el.style.setProperty("--d", delay);
});

const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  }
}, { threshold: 0.12 });

items.forEach((el) => io.observe(el));

// Tiny tilt on hover for the polaroid (desktop only)
const tilt = document.querySelector("[data-tilt]");
if (tilt && window.matchMedia("(pointer:fine)").matches) {
  tilt.addEventListener("mousemove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotate(var(--rot)) perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
  });
  tilt.addEventListener("mouseleave", () => {
    tilt.style.transform = `rotate(var(--rot))`;
  });
}
