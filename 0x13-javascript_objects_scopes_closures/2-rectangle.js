#!/usr/bin/node

const Rectangle = class Rectangle {
  constructor (w, h) {
    if (w === 0 || h === 0) {
    //   this.width = {};
    //   this.height = {};
    } else if (w < 0 || h < 0) {
    // empty constructor
    } else if (!w || !h) {
    // empthy constructor
    } else {
      this.width = w;
      this.height = h;
    }
  }

  r1 () {
    console.log(this.width, this.height);
    console.log(this.w);
    console.log(this.h);
  }
};
module.exports = Rectangle;
