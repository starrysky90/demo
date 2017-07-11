import asyncComponent from '../../utils/AsyncComponent';

const AsyncManage = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./manage"));
      }, "Manage")
    }).then(module => module.default)
  ));

export default AsyncManage;
