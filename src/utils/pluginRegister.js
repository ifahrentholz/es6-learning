import DOM from './../app/dom';

var pluginRegister = function(name, init) {
  DOM.prototype[name] = init;
};

export default pluginRegister;