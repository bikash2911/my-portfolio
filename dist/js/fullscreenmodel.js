// image full screen model

function openImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = src;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeImage() {
  const modal = document.getElementById("imageModal");

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}
