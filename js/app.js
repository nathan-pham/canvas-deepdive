import Canvas from "./Canvas.js";
import MouseLine from "./things/MouseLine.js";

const canvas = new Canvas({
    container: "#container"
})

canvas.things.push(new MouseLine())
canvas.core()