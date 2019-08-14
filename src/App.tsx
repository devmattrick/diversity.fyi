import { Component, ComponentChild, h, Fragment } from 'preact';
import { Router, Route } from 'preact-router';

import Home from './pages/Home';
import Masthead from './components/Masthead';

import './styles/app.scss';

class App extends Component {
  public render(): ComponentChild {
    return (
      <Fragment>
        <Masthead />
        <Router>
          <Route path="/" component={Home}></Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
export { App };
