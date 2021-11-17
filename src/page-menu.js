const getContainersMenu = (() => {
    const content = document.querySelector('#content');
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    content.appendChild(menuPage);

    const contentContainer = document.createElement('div');
    const headerContainer = document.createElement('div');
 
    menuPage.appendChild(headerContainer);
    menuPage.appendChild(contentContainer);
    

    contentContainer.classList.add('content-container');
    headerContainer.classList.add('header-container-menu');

    return {
        menuPage,
        contentContainer,
        headerContainer,
        content
    };
})();

const getMenuHeader = (() => {
    const header = document.createElement('h1');
    header.classList.add('menu-header');
    getContainersMenu.headerContainer.appendChild(header);
    header.textContent = 'Menu';

    return {
        header
    }
})();

const getMenuItems = (() => {
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items-container');
    getContainersMenu.contentContainer.appendChild(itemsContainer);

    const _menuList = document.createElement('ul');
    itemsContainer.appendChild(_menuList);
    _menuList.classList.add('menu-list');

    const _menuItems = ['Pancakes - $4.99', 'Pancakes with icecream - $6.99', 'Pancakes and bacon - $8.99', 'Pancakes with Strawberries - $5.99'];
    
    for(let i = 0; i <= _menuItems.length - 1; i++) {
        const item = document.createElement('li');
        item.classList.add('menu-items');
        item.innerHTML = _menuItems[i];
        _menuList.appendChild(item);
    };

    return {
        itemsContainer
    }
})();

export {
    getContainersMenu,
    getMenuHeader,
    getMenuItems
}