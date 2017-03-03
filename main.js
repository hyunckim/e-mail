const Router = require('./router');
const Inbox = require('./inbox.js');

document.addEventListener("DOMContentLoaded", () => {

  const sidebarNav = document.querySelector('.sidebar-nav');
  sidebarNav.addEventListener("click", () => {
    event.preventDefault();
    const element = event.target;
    const newLocation = element.innerText.toLowerCase();
    window.location.hash = newLocation;
  });

  const content = document.querySelector('.content');
  const router = new Router(content, routes);
  router.start();

});

const routes = {
  inbox: new Inbox()
};
