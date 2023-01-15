let currentPage = 'home';

function swipe(newPage) {
    if (currentPage !== newPage) {
        document.getElementById(newPage).style.display = 'flex';
        document.getElementById(currentPage).style.display = 'none';
        currentPage = newPage;
    }
}