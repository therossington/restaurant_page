const getContainers = (() => {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    const heroContainer = document.createElement('div');
    const textContainer = document.createElement('div');

    content.appendChild(heroContainer);
    heroContainer.appendChild(headerContainer);
    content.appendChild(textContainer);

    headerContainer.classList.add('header-container');
    heroContainer.classList.add('hero-container');
    textContainer.classList.add('text-container');

    return {
        content,
        headerContainer,
        heroContainer,
        textContainer,
    };
})();

const getHeader = (() => {
    let header = document.createElement('h1');
    getContainers.headerContainer.appendChild(header);
    header.classList.add('header');
    header.textContent = 'Pancakes galore';

    return {
        header
    };
})();

const getText = (() => {
    let text = document.createElement('p');
    getContainers.textContainer.appendChild(text);
    text.classList.add('main-text');
    text.textContent = 'This is the best pancake restaurant in town. All the best pancakes at the lowest price!'

    return {
        text
    }
})();

export { 
    getContainers,
    getHeader,
    getText
};