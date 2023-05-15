let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');
let navBarToggleExit = document.getElementById('js-nav-toggle-exit');
let navBarToggle_icon = document.getElementById('js-nav-toggle-icon');
let navBarToggleExit_icon = document.getElementById('js-nav-toggle-exit-icon');


navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    navBarToggle_icon.classList.toggle('active-none');
    navBarToggleExit.classList.toggle('active');
});

navBarToggleExit.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    navBarToggle_icon.classList.toggle('active-none');
    navBarToggleExit.classList.toggle('active');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myNav").style.top = "0";
  } else {
    document.getElementById("myNav").style.top = "-100px";
  }
}