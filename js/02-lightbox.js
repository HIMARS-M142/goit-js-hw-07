import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryCreateEl = document.querySelector(".gallery");

galleryItems.map((gall) => {
  const createMarkup = `
  <li class="gallery__item">
   <a class="gallery__link" href="${gall.original}">
      <img class="gallery__image" src="${gall.preview}" alt="${gall.description}" />
   </a>
</li>`;

  galleryCreateEl.insertAdjacentHTML("afterbegin", createMarkup);
});

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
