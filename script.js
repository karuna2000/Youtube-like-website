var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
  alert("i got clicked");
  sidebar.classList.toggel("small-sidebar");
  container.classList.toggel("large-container");
  
}
