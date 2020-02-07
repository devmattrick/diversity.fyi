import { Component, h, ComponentChild } from 'preact';
import { Link } from 'preact-router/match';

import EmojiOccupation from './EmojiOccupation';

class Navbar extends Component {
  public render(): ComponentChild {
    return (
      <header class="bg-purple-700 text-white py-4">
        <div class="container">
          <div class="flex align-middle">
            <h1 class="text-xl font-semibold">
              <Link href="/">
                <EmojiOccupation /> diversity.fyi
              </Link>
            </h1>
            <div class="flex-1 flex items-center justify-end">
              <nav>
                <ul class="grid grid-flow-col gap-6">
                  <li>
                    <Link href="/industries">Industries</Link>
                  </li>
                  <li>
                    <Link href="/industries">Job Categories</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
export { Navbar };
