import asyncComponent from '../../utils/AsyncComponent';

const AsyncFeedback = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./feedback"));
      }, "Feedback")
    }).then(module => module.default)
  ));

export default AsyncFeedback;
