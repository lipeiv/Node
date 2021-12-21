function add() {
  if (arguments.length > 0) {
    return [].slice.call(arguments).reduce(function (a, b) {
      return a + b;
    });
  } else {
    return 0;
  }
}

module.exports = {
  add: add,
};
