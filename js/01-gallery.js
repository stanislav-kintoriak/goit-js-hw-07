import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector('.gallery');


// creating markup

const picturesMarkup = createPicturesCardsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('afterbegin', picturesMarkup);

function createPicturesCardsMarkup(galleryItems){

return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}).join('');

}


// check what we click

picturesContainer.addEventListener('click', onPictureClick);

function onPictureClick(evt){

const isPictureClicked = evt.target.classList.contains("gallery__image")

if(!isPictureClicked){
    return;
}

noDefault(evt);



// image for modal

const instance = basicLightbox.create (
`<img src="${evt.target.dataset.source}" width="800" height="600">`, {onShow: () => {

    document.addEventListener('keydown', modalClosingHandler )
}, onClose: () => {
    document.removeEventListener('keydown', modalClosingHandler )
},
}

);


instance.show();


// function - closing modal by escape

function modalClosingHandler(evt){

    if(evt.code === 'Escape'){
        instance.close();
    }

}

// function - prevent default

function noDefault(evt){
evt.preventDefault();
}

}