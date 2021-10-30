export default class Canvas {

    #animationID = null
    things = []

    constructor({ container=document.body }) {

        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")

        Object.assign(this.canvas, this.dimensions)
        this.container.appendChild(this.canvas)

    }

    resize() {

        Object.assign(this.canvas, this.dimensions)
        this.things.forEach(thing => thing.resize(this))
    
    }

    get dimensions() {

        return {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

    }

    core() {

        if(this.#animationID) this.stop()

        const render = () => {

            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
            this.things.forEach(thing => thing.core(this))

            this.#animationID = window.requestAnimationFrame(render)
        
        }

        render()

    }

    stop() {

        window.cancelAnimationFrame(this.#animationID)
        this.#animationID = null

    }

}