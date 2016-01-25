import pluginRegister from '../utils/pluginRegister';

export function plugin1(options) {
  console.log(this);
  console.log(options.message || "no msg provided");
}

pluginRegister("plugin1", plugin1);
