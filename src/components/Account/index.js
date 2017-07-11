import asyncComponent from '../../utils/AsyncComponent';

const AsyncAccount = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./account"));
      }, "Account")
    }).then(module => module.default)
  ));

export default AsyncAccount;
