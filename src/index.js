import './style.css';
import { getTabs } from './page-tabs';
import { getContainersMenu, getMenuHeader } from './page-menu';
import { getContainersHome, getHeaderHome, getTextIntro, getHoursList } from './page-load';
import { getFooter } from './page-footer';

const tabSwitcher = (() => {
    getTabs.tab1.addEventListener('click', () => {
        getContainersHome.content.appendChild(getContainersHome.homePage);
        getContainersMenu.content.removeChild(getContainersMenu.menuPage);
    });
    getTabs.tab2.addEventListener('click', () => {
        getContainersHome.content.removeChild(getContainersHome.homePage);
        getContainersMenu.content.appendChild(getContainersMenu.menuPage);
    });
    addEventListener('load', () => {
        getContainersHome.content.appendChild(getContainersHome.homePage);
        getContainersMenu.content.removeChild(getContainersMenu.menuPage);
    })
})();



