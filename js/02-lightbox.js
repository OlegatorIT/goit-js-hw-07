import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function addImages() {
  const addImg = galleryItems
    .map(
      (el) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
              <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
            </a>
          </li>`
    )
    .join()
    .replaceAll(",", "");
  galleryEl.innerHTML += addImg;
}

addImages();

const options = {
  captionsData: "alt",
  captionDelay: 250,
};

new SimpleLightbox(".gallery__link", options);
