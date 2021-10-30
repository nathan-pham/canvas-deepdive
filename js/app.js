import Canvas from "./Canvas.js";
import FlowField from "./things/FlowField.js";

const canvas = new Canvas({
    container: "#container"
})

canvas.things.push(new FlowField())
canvas.core()