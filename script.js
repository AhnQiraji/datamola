let currentPage = 'home';
document.getElementById('home-link').style.filter = 'invert(1)';

function swipe(newPage) {
    if (currentPage !== newPage) {
        document.getElementById(newPage).style.display = 'flex';
        document.getElementById(newPage+'-link').style.filter = 'invert(1)';
        document.getElementById(currentPage).style.display = 'none';
        document.getElementById(currentPage+'-link').style.filter = '';
        currentPage = newPage;
    }
}
