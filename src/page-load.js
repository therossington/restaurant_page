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

    return {
        header
    };
})();

const getImage = (() => {
    image = document.createElement('img');
    getContainers.imageContainer.appendChild(image);
})();

const getText = (() => {
    text = document.createElement('p');
    getContainers.textContainer.appendChild(text);
})();

export { 
    getContainers,
    getHeader,
    getImage,
    getText
};