import { galleryItems } from "./gallery-items.js";

// Change code below this line
const ulListEl = document.querySelector(".gallery");

galleryItems.map((gall) => {
  const createMarkup = `<li class="gallery__item">
  <a class="gallery__link" href="${gall.original}">
    <img
      class="gallery__image"
      src="${gall.preview}"
      data-source="${gall.original}"
      alt="${gall.description}"
    />
  </a>
</li>`;
  ulListEl.insertAdjacentHTML("afterbegin", createMarkup);
});
ulListEl.addEventListener("click", onGalleryClick);
function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  ulListEl.addEventListener("keydown", onGalleryKey);
  function onGalleryKey(e) {
    if (e.code === "Escape") {
      instance.close();
      ulListEl.removeEventListener("keydown", onGalleryKey);
    }
  }
}
