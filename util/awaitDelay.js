module.exports = function (timeMS) {
  return new Promise((ok, ng) => {
    setTimeout(() => {
      ok();
    }, timeMS);
  });
};
