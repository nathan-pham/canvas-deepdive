import Canvas from "./Canvas.js";
// import MouseLine from "./things/MouseLine.js";
import FlowField from "./things/FlowField.js";

const canvas = new Canvas({
    container: "#container"
})

canvas.push(new FlowField())
canvas.core()