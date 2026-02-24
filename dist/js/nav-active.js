const links = document.querySelectorAll(".navbar-link");

// Remove trailing slash, get last part of path
let currentPage =
  location.pathname.replace(/\/$/, "").split("/").pop() || "index.html";

links.forEach((link) => {
  const linkPage = link.getAttribute("href");

  // Check match
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
