import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);



function createGalleryItem(galleryItems) {
return galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item"><a class="gallery__link" href="${preview}"><img class="gallery__image" src="${original}" data-source="${preview}" alt="${description}"/></a></li>`;})
.join('');
}

function onImageClick(event) {
      event.preventDefault();
      const instance = basicLightbox.create(`<img src="${event.target.src}">`,);
      instance.show();
}

gallery.addEventListener('click', onImageClick);
console.log(basicLightbox);