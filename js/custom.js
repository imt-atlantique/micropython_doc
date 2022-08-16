// remove all the nav if the page is called from the LMS
if (window.location.href.indexOf("embed") > -1) {
    navBars = document.getElementsByTagName('nav')[1].style.display = 'none';
    document.getElementsByClassName('wy-breadcrumbs')[0].parentNode.style.display = 'none';
    document.getElementsByTagName('footer')[0].style.display = 'none';
}