export var kebabCase = string => {
  function upperToHyphenLower(match) {
    if(string.indexOf(match) === 0) {
      return match.toLowerCase();
    }
    return "-" + match.toLowerCase();
  }

  return string.replace(/_/g, "-")
    .replace(/[A-Z]+/g, upperToHyphenLower)
    .toLowerCase();
};

