// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector('.gallery');

const listItem = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  )
  .join('');

list.insertAdjacentHTML('afterbegin', listItem);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
  enableKeyboard: 'true',
});
