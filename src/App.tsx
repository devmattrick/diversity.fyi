import { Component, ComponentChild, h } from 'preact';

import Masthead from './components/Masthead';

import './styles/app.scss';

class App extends Component {
  public render(): ComponentChild {
    return <Masthead />;
  }
}

export default App;
export { App };
