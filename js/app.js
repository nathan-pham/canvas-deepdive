import Canvas from "./Canvas.js";
import FlowField from "./things/FlowField.js";

const canvas = new Canvas({
    container: "#container"
})


window.addEventListener("resize", () => canvas.resize())

canvas.things.push(new FlowField())
canvas.core()