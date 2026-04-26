document.querySelector(".dropdown > a").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".dropdown-content").classList.toggle("show");
});