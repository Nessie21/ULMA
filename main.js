//jshint esversion:6
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    let title = document.getElementById('title');
    title.innerHTML = 'Wróć do nas!';
  } else {
    let title = document.getElementById('title');
    title.innerHTML = 'ULMA';
  }
});

function showArrow() {
  var arrow = document.getElementById('arrow');
  arrow.classList.add('arrow-visibility');
}

function hideArrow() {
  let arrow = document.getElementById('arrow');
  arrow.classList.remove('arrow-visibility');
}

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('contact-link') === -1) {
    hideArrow()
  }
});

document.body.addEventListener('wheel', function () {
  hideArrow()
});


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
window.onload = function () {
  currentDate = new Date();
  let year = currentDate.getFullYear();
  document.getElementById('footerYear').textContent = '© Copyright ' + year + ' ULMA';
}