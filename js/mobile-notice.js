function continueToPortfolio() {
    document.getElementById('mobile-notice').style.display = 'none';

    localStorage.setItem('mobileNoticeSeen', 'true');
}

window.addEventListener('load', () => {

    const isMobile = window.innerWidth <= 768;

    const alreadySeen =
        localStorage.getItem('mobileNoticeSeen');

    if (isMobile && !alreadySeen) {
        document.getElementById('mobile-notice').style.display = 'flex';
    }

});