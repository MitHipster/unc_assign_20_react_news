/*jslint esversion: 6, browser: true*/
$(document).ready(function () {
  // Initialize side nav bar for mobile and set width
  $(".button-collapse").sideNav({
    menuWidth: 250,
    closeOnClick: true
  });

  // Set smooth scroll click event on valid links
  // Select links with hashes
  $('a[href*="#"]')
  // Remove links that are just placeholders
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function () {
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
  });
});
