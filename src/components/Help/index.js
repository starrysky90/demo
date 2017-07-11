import asyncComponent from '../../utils/AsyncComponent';

const AsyncHelp = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./help"));
      }, "Help")
    }).then(module => module.default)
  ));

export default AsyncHelp;
