const getTabs = (() => {
    const content = document.querySelector('#content');
    const _siteHeader = document.createElement('div');
    const _tabsContainer = document.createElement('div');

    _siteHeader.classList.add('site-header');
    content.appendChild(_siteHeader);

    _siteHeader.appendChild(_tabsContainer);
    _tabsContainer.classList.add('tabs-container');

    const tab1 = document.createElement('button');
    _tabsContainer.appendChild(tab1);
    const tab2 = document.createElement('button');
    _tabsContainer.appendChild(tab2);

    tab1.textContent = 'About';
    tab2.textContent = 'Menu';

    return {
        content,
        tab1,
        tab2
    }    
})();

export {
    getTabs
}
