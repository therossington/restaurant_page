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
    const tab3 = document.createElement('button');
    _tabsContainer.appendChild(tab3);

    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';

    return {
        content,
        tab1,
        tab2,
        tab3
    }    
})();

export {
    getTabs
}
