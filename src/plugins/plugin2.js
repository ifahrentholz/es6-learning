import plugin from '../utils/pluginRegister';

export function ifLog2(options) {
  console.log(options.message || "no msg provided");
}

plugin("cAlias2", ifLog2);