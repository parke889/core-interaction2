document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector('.title');
  var two = document.querySelector('.praise');
  var three = document.querySelector('.shadows');
  var intro = document.querySelector('.intro');

  document.addEventListener("click", function() {
    title.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";

    intro.style.display = "block"
  });
});
