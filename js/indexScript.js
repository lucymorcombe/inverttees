window.addEventListener('scroll', whiteScroll);

whiteScroll();

function whiteScroll() {
    document.getElementById('white').classList.add("hide");
    document.getElementById('header').classList.add("show");
    document.getElementById('homeContainer').classList.add("show");
}


