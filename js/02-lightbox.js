import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const lightboxEl = document.querySelector('.modal')
const galleryItemsMarkup = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);



function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;})
    .join('');
}

function onImageClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`<div class="modal"><img src="${event.target.dataset.source}"></div>`,);
    instance.show();
    }

gallery.addEventListener('click', onImageClick);
console.log(basicLightbox);
