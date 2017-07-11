import asyncComponent from '../../utils/AsyncComponent';

const AsyncStat = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./stat"));
      }, "Stat")
    }).then(module => module.default)
  ));

export default AsyncStat;
