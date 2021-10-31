import Thing from "./Thing.js";

export default class Background extends Thing {

    color = "rgba(0, 0, 0, 0.4)"

    init({ canvas }) {
        canvas.style.backgroundColor = "#000"
    }

    render({ ctx, dimensions: { width, height } }) {

        ctx.clearRect(0, 0, width, height)

        // ctx.fillStyle = this.color
        // ctx.fillRect(0, 0, width, height)

    }

}