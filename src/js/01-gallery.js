import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

createGalleryItems();

function createGalleryItems() {
  const itemsArray = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}" title="test">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", itemsArray);
}

let lightox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
