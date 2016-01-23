// http://www.ericponto.com/blog/2014/10/05/es6-dom-library/

import { kebabCase } from "./kebab-case";

class DOM {
  constructor(selector) {
    this.elements = Array.from(document.querySelectorAll(selector));
    this.length = this.elements.length;

    Object.assign(this, this.elements);
  }

  each(callback) {
    for(let el of Array.from(this)) {
      callback.call(el);
    }
  }

  addClass(className) {
    let kebabClassName = kebabCase(className);
    this.each(function() {
      this.classList.add(kebabClassName);
    });
  }


}

export var $ = selector => new DOM(selector);

