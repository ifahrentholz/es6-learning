// http://www.ericponto.com/blog/2014/10/05/es6-dom-library/
import { kebabCase } from "./../utils/kebab-case";
import pluginRegister from "../utils/pluginRegister";

export default class DOM {
  constructor(selector, options) {
    this.elements = Array.from(document.querySelectorAll(selector));
    this.length = this.elements.length;
    this.options = options || {};

    Object.assign(this, this.elements);

    // call a plugin
    if(this.options.plugins) {
      let plugins = this.options.plugins;

      Object.getOwnPropertyNames(plugins).forEach(function(name) {
        if(typeof this[name] === "function") {
          this[name](plugins[name]);
        } else {
          console.log("unable to find plugin: " + name);
        }
      }, this);
    }
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

    return this;
  }

}

DOM.prototype.pluginRegister = pluginRegister;



export var $ = (selector, options) => new DOM(selector, options);

