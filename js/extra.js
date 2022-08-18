// remove all the nav if the page is called from the LMS
if (window.location.href.indexOf("embed") > -1) {
    header = document.getElementsByTagName('header')[0].style.display = 'none';
    document.getElementsByTagName('footer')[0].style.display = 'none';
}