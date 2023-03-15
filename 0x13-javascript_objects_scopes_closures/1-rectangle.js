const Rectangle = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }

  r1 () {
    console.log(this.width, this.height);
    console.log(this.w);
    console.log(this.h);
  }
};

module.exports = Rectangle; /\\\\\n\g