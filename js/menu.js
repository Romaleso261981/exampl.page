const menuButton = $('.menu-button');
const overlayNav = $('.overlay-navigation')

menuButton.on('click', handleMenu)

function handleMenu(e){
e.preventDefault();
overlayNav.toggleClass('visible')
}

function initMobile() {
    console.log("is-mobile");
}


function initDesktop() {
    overlayNav.removeClass('visible')
    
    console.log("is-desktop");
}