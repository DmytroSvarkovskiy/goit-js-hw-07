import { galleryItems } from './gallery-items.js';
// Change code below this line

const galaryDiv = document.querySelector('.gallery');

const createGalary = collection => {
    return collection.map(({preview, original, description}) => {
        const markingElement = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` ;
        galaryDiv.insertAdjacentHTML('afterbegin', markingElement);
    })
}

createGalary(galleryItems);


const onImgClick = event => {
    event.preventDefault();
    const linkOriginal = event.target.dataset.source;
    if (event.target.nodeName !== 'IMG') { return };
    const instance = basicLightbox.create(`
    <img src="${linkOriginal}" width="800" height="600">`)
    instance.show();

    const onEscClick=event=>{ if (event.code === 'Escape') {
        instance.close();
        galaryDiv.removeEventListener('keydown', onEscClick)}}
    galaryDiv.addEventListener('keydown', onEscClick)
}

galaryDiv.addEventListener('click', onImgClick);

