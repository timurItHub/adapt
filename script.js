window.addEventListener('resize', function() {
    var body = document.body;
    var windowWidth = window.innerWidth;

    if (windowWidth < 600) {
        body.style.backgroundColor = 'lightblue';
    } else {
        body.style.backgroundColor = 'white';
    }
});