import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = createCards(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", markup);

function createCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item"
href="${original}">
<img class="gallery__image"
src="${preview}"
alt="Image ${description}" />
</a>
`;
    })
    .join("");
}


const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom"
  });







console.log(galleryItems);
