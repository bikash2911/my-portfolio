const links = document.querySelectorAll(".navbar-link");
const currentPage = location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href");

  // Check if the link matches the current page
  if (
    linkPage === currentPage ||
    (linkPage === "index.html" && currentPage === "")
  ) {
    link.classList.add("active");
  }
});
