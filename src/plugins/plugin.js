import plugin from '../utils/pluginRegister';


function ifLog(msg) {
  console.log(msg || "no msg provided");
}

plugin("ifLog", ifLog);
