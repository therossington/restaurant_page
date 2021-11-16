const getContainersMenu = (() => {
    const content = document.querySelector('#content');
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    content.appendChild(menuPage);

    const contentContainer = document.createElement('div');
    const headerContainer = document.createElement('div');
 
    menuPage.appendChild(contentContainer);

    contentContainer.classList.add('content-container');
    headerContainer.classList.add('header-container');

    return {
        menuPage,
        contentContainer,
        headerContainer,
        content
    };
})();

export {
    getContainersMenu
}