const getContainersContact = (() => {
    const content = document.querySelector('#content');
    
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');
    content.appendChild(contactPage);

    const contentContainer = document.createElement('div');
    const headerContainer = document.createElement('div');
 
    contactPage.appendChild(contentContainer);

    contentContainer.classList.add('content-container');
    headerContainer.classList.add('header-container');

    return {
        contactPage,
        contentContainer,
        headerContainer,
        content
    };
})();

export {
    getContainersContact
}