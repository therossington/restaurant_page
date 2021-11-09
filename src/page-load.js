import Image from './picture_restaurant.jpg';

const getContainers = (() => {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    const textContainer = document.createElement('div');
    const imageContainer = document.createElement('div');

    content.appendChild(headerContainer);
    content.appendChild(textContainer);
    content.appendChild(imageContainer);

    headerContainer.classList.add('header-container');
    textContainer.classList.add('text-container');
    imageContainer.classList.add('image-container');

    return {
        content,
        headerContainer,
        textContainer,
        imageContainer,
    };
})();

const getHeader = (() => {
    let header = document.createElement('h1');
    getContainers.headerContainer.appendChild(header);
    header.classList.add('header');
    header.textContent = 'The restaurant page!';

    return {
        header
    };
})();

const getImage = (() => {
    let image = document.createElement('img');
    getContainers.imageContainer.appendChild(image);
    image.classList.add('main-image');
    image.src = Image;
})();

const getText = (() => {
    let text = document.createElement('p');
    getContainers.textContainer.appendChild(text);
    text.classList.add('main-text');
    text.textContent = 'This is the best restaurant in town. All the best food at the lowest price!'

    return {
        text
    }
})();

export { 
    getContainers,
    getHeader,
    getImage,
    getText
};