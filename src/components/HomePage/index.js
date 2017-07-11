import asyncComponent from '../../utils/AsyncComponent';

const AsyncHomePage = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./homepage"));
      }, "HomePage")
    }).then(module => module.default)
  ));

export default AsyncHomePage;
