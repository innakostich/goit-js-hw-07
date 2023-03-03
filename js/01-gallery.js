import { galleryItems } from './gallery-items.js';

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

  
  document.addEventListener("keydown", onDocumentKeyDown);


  instance.element().addEventListener("keydown", onInstanceKeyDown);

  function onDocumentKeyDown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  function onInstanceKeyDown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
};

galleryContainer.addEventListener("click", onContainerClick);


 

  // addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") {
  //       console.log("close modal");
  //     }
  //     console.log(e);
  //   });