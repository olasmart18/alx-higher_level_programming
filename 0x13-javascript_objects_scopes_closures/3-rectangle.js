#!/usr/bin/node

const Rectangle = class Rectangle {
  constructor (h, w) {
    if (w === 0 || h === 0) {
      // empty constructor
    } else if (w < 0 || h < 0) {
      // create an empty constructor
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.width; i++) {
      console.log('X'.repeat(this.height));
    }
  }
};
module.exports = Rectangle;
