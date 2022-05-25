class JJLazyImage extends HTMLElement {
  constructor() {
    super();
    console.info('lazy-img: initialized');
  }
  connectedCallback() {
    const images = this.getElementsByTagName('img');
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add('lazy');
    }
  }
}
const lazyHandler = (event) => {
  console.log('lazyHandler fired', event.taret);
  var lazyloadImages;
  const elmId = event.target.id.split('-')[1];
  lazyloadImages = document
    .getElementById(elmId)
    .querySelectorAll(':scope > .lazy');
  console.log(lazyloadImages);
  lazyloadImages.forEach((img) => {
    const src = img.dataset.src;
    img.removeAttribute('data-src');
    img.setAttribute('src', src);
    img.classList.remove('lazy');
  });
};

const initComponents = () => {
  customElements.define('lazy-img', JJLazyImage);

  const btns = document.getElementsByTagName('button');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', lazyHandler);
  }
};
