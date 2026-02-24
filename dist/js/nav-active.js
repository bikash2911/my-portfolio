const links = document.querySelectorAll(".navbar-link");
const currentPage =
  location.pathname.split("/").filter(Boolean).pop() || "index.html";

links.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
