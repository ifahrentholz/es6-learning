import DOM from './../app/dom';

var plugin = function(name, init) {
  DOM.prototype[name] = init;
};

export default plugin;