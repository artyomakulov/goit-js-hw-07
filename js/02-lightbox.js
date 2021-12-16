import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);



function createGalleryItem(galleryItems) {
return galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a>`;})
.join('');
}

let gallerySet = new SimpleLightbox('.gallery a', {captionPosition: "bottom", captionDelay: 250});
gallerySet.on('show.simplelightbox', function () {
  return;
});