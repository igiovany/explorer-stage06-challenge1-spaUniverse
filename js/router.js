const body = document.querySelector('body')

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    this.toggleBackground(pathname)

    fetch(route).then((data) => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }

  toggleBackground(pathname) {
    const oldClass = body.classList.value
    body.classList.remove(`${oldClass}`)

    switch (pathname) {
      case "/":
        body.classList.add('home')
        break;
      case "/universe":
        body.classList.add("universe");
        break;
      case "/exploration":
        body.classList.add("exploration");
        break;

      default:
        break;
    }
  }
}