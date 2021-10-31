import Thing from "./Thing.js";

Math.lerp = (min, max, t) => min * (1 - t) + max * t
Math.limit = (n, min, max) => Math.max(min, Math.min(max, n))

export default class FlowField extends Thing {

    cellSize = 35
    time = 0

    init({ ctx, dimensions }) {

        this.points = this.#createGrid()
        this.gradient = this.#createGradient(ctx, dimensions)
        
    }

    update() {
        this.time += 0.1
    }

    #createGradient(ctx, dimensions) {

        const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height)
       
        gradient.addColorStop("0.1", "#ff5c33")
        gradient.addColorStop("0.9", "#ffff33")

        return gradient

    }

    #createGrid(size=32) {

        const points = []

        for(let x = 0; x < size; x++) {
            for(let y = 0; y < size; y++) {
                const u = size <= 1 ? 0.5 : (x / (size - 1))
                const v = size <= 1 ? 0.5 : (y / (size - 1))
                points.push([u, v])
            }
        }

        return points

    }

    render({ ctx, mouse, dimensions: { width, height } }) {

        const margin = 30

        ctx.fillStyle = "#000"
        ctx.fillRect(0, 0, width, height)
       
        ctx.strokeStyle = this.gradient

        for(const point of this.points) {
            const [u, v] = point

            const x = Math.lerp(margin, width - margin, u)
            const y = Math.lerp(margin, height - margin, v)
            const angle = Math.cos(x * 0.25 + this.time) + Math.sin(y * 0.25 + this.time)

            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + angle * 20, y + angle * 20)
            ctx.stroke()

        }

    }


}