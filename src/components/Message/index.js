import asyncComponent from '../../utils/AsyncComponent';

const AsyncMessage = asyncComponent(() =>
  (new Promise((resolve, reject) => {
      require.ensure([], function(require) {
        resolve(require("./message"));
      }, "Message")
    }).then(module => module.default)
  ));

export default AsyncMessage;
