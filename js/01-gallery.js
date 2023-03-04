import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = createCards(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", markup);

function createCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link"
href="${original}">
<img
class="gallery__image"
loading = "lazy"
src="${preview}"
data-source="${original}"
alt="Image ${description}"
/>
</a>
</div>
`;
    })
    .join("");
}

galleryContainer.addEventListener("click", handleModalClick);

function handleModalClick(event) {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}" width="800" height="600">
`);
  instance.show();
  console.log(target.dataset.source);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
