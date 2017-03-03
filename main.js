document.addEventListener("DOMContentLoaded", () => {

  const sidebarNavLi = document.querySelector('.sidebar-nav li');
  sidebarNavLi.addEventListener("click", () => {
    event.preventDefault();
    const element = event.target;
    const newLocation = element.innerText.toLowerCase();
    window.location.hash = newLocation;
  });






});
