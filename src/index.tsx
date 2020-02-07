import { h, render } from 'preact';

import './style.css';

import applyFavicon from './utils/favicon';

function init(): void {
  const App = require('./App').default;
  render(<App />, document.body);
  applyFavicon();
}

if (module.hot) {
  module.hot.accept('./App', (): number => requestAnimationFrame(init));
}

init();
