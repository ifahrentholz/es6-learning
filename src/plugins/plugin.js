import plugin from '../utils/pluginRegister';

export function ifLog(options) {
  console.log(options.message || "no msg provided");
}

plugin("cAlias", ifLog);
