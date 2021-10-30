export default class Canvas {

    things = []

    constructor({ container=document.body }) {

        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")

        Object.assign(this.canvas, this.dimensions)
        this.container.appendChild(this.canvas)

    }

    get dimensions() {

        return {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

    }

    core() {

        const render = () => {
            window.requestAnimationFrame(render)
            this.things.forEach(thing => thing.core(this))
        }

        render()

    }

}