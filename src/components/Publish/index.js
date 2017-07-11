import asyncComponent from '../../utils/AsyncComponent';

const AsyncPublish = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./publish"));
      }, "Publish")
    }).then(module => module.default)
  ));

export default AsyncPublish;
