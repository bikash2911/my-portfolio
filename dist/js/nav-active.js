const links = document.querySelectorAll(".navbar-link");

// pathname ko trailing slash hataune ra empty lai index.html set garne
let currentPage = location.pathname.replace(/\/$/, ""); // trailing slash remove
currentPage = currentPage.split("/").pop() || "index.html";

links.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
