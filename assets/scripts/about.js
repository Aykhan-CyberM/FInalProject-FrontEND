const effect = document.querySelectorAll('.effect')
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function (item) {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        effect.classList.remove("effect1");
        effect.classList.add("effect2");
    } else {
        // Scrolling down
        effect.classList.remove("effect2");
        effect.classList.add("effect1");
    }

    prevScrollPos = currentScrollPos;
});
