class Router{
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start(){
    this.render();
    window.addEventListener('hashchange', () => {
      this.render();
    });
  }

  activeRoute(){
    const currentRoute = window.location.hash.slice(1);
    return this.routes[currentRoute];
  }

  render(){
    const component = this.activeRoute();
    this.node.innerHTML = "";
    if (component) {
      this.node.appendChild(component.render());
    }
  }
}

module.exports = Router;
