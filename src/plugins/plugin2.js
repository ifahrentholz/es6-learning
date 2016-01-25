import pluginRegister from '../utils/pluginRegister';

export function plugin2(options) {
  console.log(options.message || "no msg provided");
}

pluginRegister("plugin2", plugin2);