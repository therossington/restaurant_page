const getContainersHome = (() => {
    const content = document.querySelector('#content');
    
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');
    content.appendChild(homePage);

    const contentContainer = document.createElement('div');
    const headerContainer = document.createElement('div');
    const heroContainer = document.createElement('div');
    const textContainer = document.createElement('div');

    homePage.appendChild(contentContainer);
    contentContainer.appendChild(heroContainer);
    heroContainer.appendChild(headerContainer);
    contentContainer.appendChild(textContainer);

    contentContainer.classList.add('content-container');
    headerContainer.classList.add('header-container');
    heroContainer.classList.add('hero-container');
    textContainer.classList.add('text-container');

    return {
        content,
        homePage,
        contentContainer,
        headerContainer,
        heroContainer,
        textContainer,
    };
})();

const getHeaderHome = (() => {
    const header = document.createElement('h1');
    getContainersHome.headerContainer.appendChild(header);
    header.classList.add('header');
    header.textContent = 'Pancakes galore';

    return {
        header
    };
})();

const getTextIntro = (() => {
    const textIntro = document.createElement('h2');
    getContainersHome.textContainer.appendChild(textIntro);
    textIntro.classList.add('main-text');
    textIntro.textContent = 'This is the best pancake restaurant in town. All the best pancakes at the lowest price! We freshly make our pancakes on site, so they always taste fresh.'

    return {
        textIntro
    }
})();

const getHoursList = (() => {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    getContainersHome.textContainer.appendChild(detailsContainer);

    const hoursContainer = document.createElement('div');
    detailsContainer.appendChild(hoursContainer);
    hoursContainer.classList.add('hours-container');

    const _hoursHeader = document.createElement('h3');
    hoursContainer.appendChild(_hoursHeader);
    _hoursHeader.classList.add('hours-header');
    _hoursHeader.textContent = 'Open hours';

    const _hoursList = document.createElement('ul');
    hoursContainer.appendChild(_hoursList);
    _hoursList.classList.add('hours');

    const _hours = ['Monday: 9-5', 'Tuesday: 9-5', 'Wednesday: 9-5', 'Thursday: 9-5', 'Friday: 9-5', 'Saturday: 8-6', 'Sunday: 8-6'];
    
    for(let i = 0; i <= _hours.length - 1; i++) {
        const item = document.createElement('li');
        item.innerHTML = _hours[i];
        _hoursList.appendChild(item);
    };

    return {
        hoursContainer,
        detailsContainer
    };
})();

const getLocation = (() => {
    const locationContainer = document.createElement('div');
    getHoursList.detailsContainer.appendChild(locationContainer);
    locationContainer.classList.add('location-container');

    const _locationHeader = document.createElement('h3')
    locationContainer.appendChild(_locationHeader);
    _locationHeader.classList.add('location-header');
    _locationHeader.textContent = 'Location';

    const _locationInfo = {
        address: "8 Example Street",
        city: "Example City",
        state: "QLD",
        fullAddress: function() {
            return this.address + ", " + this.city + ", " + this.state;
        }
    }

    const _locationText = document.createElement('p');
    _locationText.textContent = _locationInfo.fullAddress();
    _locationText.classList.add('location-details');

    locationContainer.appendChild(_locationText);

    return {
        locationContainer
    };
})();

export { 
    getContainersHome,
    getHeaderHome,
    getTextIntro,
    getHoursList,
    getLocation
};