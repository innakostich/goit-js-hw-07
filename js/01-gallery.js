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

  const onContainerClick = (e) => {
    e.preventDefault();
  
    if (e.target.classList.contains("gallery")) return;
      const source = e.target.dataset.source;
      
    const instance = basicLightbox.create(`
      <img src="${source}"width="800" height="600">`);
  
    instance.show();
  };
  
  galleryContainer.addEventListener("click", onContainerClick);

