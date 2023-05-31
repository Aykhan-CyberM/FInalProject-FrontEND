const effects = document.querySelectorAll('.effect');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos < prevScrollPos) {
    // Scrolling up
    effects.forEach(function(item) {
      item.classList.remove("effect1");
      item.classList.add("effect2");
    });
  } else {
    // Scrolling down
    effects.forEach(function(item) {
      item.classList.remove("effect2");
      item.classList.add("effect1");
    });
  }

  prevScrollPos = currentScrollPos;
});
