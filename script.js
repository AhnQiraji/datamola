let currentPage = localStorage.getItem('lastSessionPage');

switch (currentPage) {
    case 'about-me':
    case 'resume':
    case 'portfolio':
    case 'contacts':
        document.getElementById(currentPage).style.display = 'flex';
        document.getElementById(currentPage+'-link').style.filter = 'invert(1)';
        document.getElementById('home').style.display = 'none';
        document.getElementById('home-link').style.filter = '';
        break;
    default:
        currentPage = 'home';
        document.getElementById('home-link').style.filter = 'invert(1)';
}

function swipe(newPage) {
    if (currentPage !== newPage) {
        document.getElementById(newPage).style.display = 'flex';
        document.getElementById(newPage+'-link').style.filter = 'invert(1)';
        document.getElementById(currentPage).style.display = 'none';
        document.getElementById(currentPage+'-link').style.filter = '';
        currentPage = newPage;
        localStorage.lastSessionPage = currentPage;
    }
}