const Rectangle = class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    };
    r1() {
        console.log(w, h);
        console.log(this.w);
        console.log(this.h);
    }
}

module.exports = Rectangle;