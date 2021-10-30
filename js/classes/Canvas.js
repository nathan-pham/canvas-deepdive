export default class Canvas {

    constructor({ container=document.body }) {

        this.container = typeof container == "string" ? document.querySelector(container) : container

        this.#createCanvas()

        this.container.appendChild(this.canvas)

    }

    #createCanvas() {

        this.canvas = document.createElement("canvas")
        this.canvas.height = this.dimensions.height
        this.canvas.width = this.dimensions.width

        this.ctx = this.canvas.getContext("2d")

    }

    get dimensions() {

        return {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

    }

}