import { Component, ComponentChild, h, JSX } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import { Router, Route } from 'preact-router';

import Navbar from './components/Navbar';

import Home from './pages/Home';

const AsyncRoute = (name: string) => (): JSX.Element => (
  <Suspense fallback={<div>aaa</div>}>
    {h(
      lazy(() => import(`./pages/${name}`)),
      null
    )}
  </Suspense>
);

class App extends Component {
  public render(): ComponentChild {
    return (
      <div class="h-full flex flex-col">
        <Navbar />
        <main class="flex-1">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={AsyncRoute('About')} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
export { App };
