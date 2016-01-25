import {$} from './app/dom';
import {ifLog} from './plugins/plugin';
import {ifLog2} from './plugins/plugin2';

// test $ (as custom DOM module)
// and in the DOM module the kebab-case module here.
$(".test1", {
  plugins: {
    cAlias: {
      message: "first plugin message."
    }
  }
}).addClass("camelCaseTest");


$(".test2", {
  plugins: {
    cAlias2: {
      message: "second plugin message."
    }
  }
}).addClass("MyCamelCaseTest_123");

