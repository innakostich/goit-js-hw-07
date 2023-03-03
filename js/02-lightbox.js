import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
 createImagesMarkup(galleryItems);


function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
      <li>
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
          </a>
          </li>
         
        </ul>`;
        })
        .join("");
    }

    const onContainerClick = (e) => {
      e.preventDefault();}
      
   const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});

galleryContainer.addEventListener("click", onContainerClick);

 
// addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       console.log("close modal");
//     }
//     console.log(e);
//   });