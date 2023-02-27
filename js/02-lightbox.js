import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
  
function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });

 
