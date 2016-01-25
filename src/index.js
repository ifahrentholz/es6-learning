import {$} from './app/dom';
import {logg} from './plugins/plugin';

// test $ (as custom DOM module)
// and in the DOM module the kebab-case module here.
$(".test1", {
  plugins: {
    ifLog: {
      message: "ifLog with custom message"
    }
  }
}).addClass("camelCaseTest");


