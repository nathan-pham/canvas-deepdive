export default class Canvas {

    #animationID = null
    #lastTime = 0

    interval = 1000 / 60
    timer = 0

    things = []
    mouse = { x: 0, y: 0 }

    constructor({ container=document.body }) {

        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")

        Object.assign(this.canvas, this.dimensions)
        this.container.appendChild(this.canvas)

        this.#addEventListeners()

    }

    push(...things) {

        things.forEach(thing => thing.init(this))
        this.things.push(...things)
        
    }

    #addEventListeners() {

        window.addEventListener("resize", () => {
            
            Object.assign(this.canvas, this.dimensions)
            this.things.forEach(thing => thing.resize(this))

        })

        this.canvas.addEventListener("mousemove", e => {

            this.mouse.x = e.x
            this.mouse.y = e.y

        })

    }

    get dimensions() {

        return {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

    }

    core() {

        if(this.#animationID) this.stop()

        const render = (timeStamp=0) => {

            const deltaTime = timeStamp - this.#lastTime
            this.#lastTime = timeStamp

            if(this.timer > this.interval) {

                this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
                this.things.forEach(thing => thing.core(this))

                this.timer = 0

            } else this.timer += deltaTime

            this.#animationID = window.requestAnimationFrame(render)
        
        }

        render()

    }

    stop() {

        window.cancelAnimationFrame(this.#animationID)
        this.#animationID = null

    }

}