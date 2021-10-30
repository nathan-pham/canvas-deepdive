export default class Thing {

    resize() {}
    update() {}
    render() {}

    core(canvas) {

        this.update(canvas)
        this.render(canvas)
    
    }

}