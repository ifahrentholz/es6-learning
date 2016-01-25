import {$} from './app/dom';
import {plugin1} from './plugins/plugin';
import {plugin2} from './plugins/plugin2';

// test $ (as custom DOM module)
// and in the DOM module the kebab-case module here.
$(".test1", {
  plugins: {
    plugin1: {
      message: "first plugin message."
    }
  }
}).addClass("camelCaseTest");


$(".test2", {
  plugins: {
    plugin2: {
      message: "second plugin message."
    }
  }
}).addClass("MyCamelCaseTest_123");

