import './style.css';
import { getTabs } from './page-tabs';
import {getContainersHome, getHeaderHome, getTextIntro, getHoursList} from './page-load';
import { getFooter } from './page-footer';
import { getContainersMenu } from './page-menu';

const tabSwitcher = (() => {
    getTabs.tab1.addEventListener('click', () => {
        getContainersHome.content.removeChild(getContainersHome.homePage);
    })
})();

addEventListener('load', () => {
    getContainersHome.homePage.style.display = "flex";
    getContainersMenu.content.removeChild(getContainersMenu.menuPage);
})

