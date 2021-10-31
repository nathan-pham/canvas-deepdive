import Canvas from "./Canvas.js"
// import MouseLine from "./things/MouseLine.js";
import Background from "./things/Background.js"
import FlowField from "./things/FlowField.js"

const canvas = new Canvas({
    container: "#container"
})

canvas.push(new Background(), new FlowField())
canvas.core()