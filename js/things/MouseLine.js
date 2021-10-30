import Thing from "./Thing.js";

export default class MouseLine extends Thing {

    angle = 0
    x = 0
    y = 0

    update({ dimensions: { width, height } }) {
        
        this.angle += 0.01

        this.x = width / 2 + Math.cos(this.angle) * 100
        this.y = height / 2 + Math.sin(this.angle) * 100

    }

    render({ ctx, mouse }) {

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()

    }

}