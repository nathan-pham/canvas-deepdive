export default class Thing {

    init() {}
    resize(canvas) {
        this.init(canvas)
    }

    update() {}
    render() {}

    core(canvas) {

        this.update(canvas)
        this.render(canvas)
    
    }

}