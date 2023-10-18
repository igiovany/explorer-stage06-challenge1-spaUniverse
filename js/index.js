import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")

// console.log(router)

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()