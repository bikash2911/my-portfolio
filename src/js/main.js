const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const body = document.getElementById("body");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  openIcon.classList.add("opacity-0");
  closeIcon.classList.remove("opacity-0");
  body.classList.add("overflow-hidden"); // SCROLL LOCK
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("opacity-0", "pointer-events-none");
  openIcon.classList.remove("opacity-0");
  closeIcon.classList.add("opacity-0");
  body.classList.remove("overflow-hidden"); // UNLOCK
}

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.contains("translate-x-full") ? openMenu() : closeMenu();
});

overlay.addEventListener("click", closeMenu);

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
