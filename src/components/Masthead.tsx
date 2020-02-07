import { Component, ComponentChild, Fragment, h } from 'preact';

import SearchBox from './SearchBox';

class Masthead extends Component {
  public render(): ComponentChild {
    return (
      <Fragment>
        <header class="pt-16 pb-24 bg-purple-700 text-white shadow-md">
          <div class="container">
            <p class="text-2xl">
              Find and compare diversity statistics across companies.
            </p>
          </div>
        </header>
        <div class="container -mt-8">
          <div class="text-md sm:text-xl max-w-lg">
            <SearchBox />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Masthead;
export { Masthead };
