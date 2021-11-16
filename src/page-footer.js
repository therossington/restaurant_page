const getFooter = (() => {
    const content = document.querySelector('#content');
    const siteFooter = document.createElement('div');
    const _footerContent = document.createElement('div');

    siteFooter.classList.add('site-footer');
    content.appendChild(siteFooter);

    siteFooter.appendChild(_footerContent);
    _footerContent.classList.add('footer-content');

    const _footerText = document.createElement('p');
    _footerText.classList.add('footer-text');
    _footerText.textContent = 'Copyright © 2021';

    _footerContent.appendChild(_footerText);

    return {
        siteFooter,
    }    
})();

export {
    getFooter
}
