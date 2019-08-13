import { h, render } from 'preact';

function init(): void {
  let App = require('./App').default;
  render(<App />, document.body);
}

if (module.hot) {
  module.hot.accept('./App', (): number => requestAnimationFrame(init));
}

init();
