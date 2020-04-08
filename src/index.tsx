if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import { h, render } from 'preact';

import './style.css';

import randomFavicon from './utils/favicon';

function init(): void {
  const App = require('./App').default;
  render(<App />, document.body);
  randomFavicon();
}

if (module.hot) {
  module.hot.accept('./App', (): number => requestAnimationFrame(init));
}

init();
