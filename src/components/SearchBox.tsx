import bind from 'bind-decorator';
import cx from 'classnames';
import { Component, ComponentChild, h } from 'preact';

import '../styles/SearchBox.css';

interface SearchBoxState {
  text: string;
}

class SearchBox extends Component<{}, SearchBoxState> {
  public render(props, { text }): ComponentChild {
    return (
      <form role="search">
        <label
          class={cx(
            'block',
            'relative',
            'cursor-text',
            'text-inherit',
            'search-box',
            text && 'search-box--filled'
          )}
        >
          <div class="absolute flex items-center h-full w-full">
            <div class="inline-block p-4 text-gray-500 select-none pointer-events-none">
              <svg
                class="block w-8 h-8"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  class="fill-current"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </div>
            <div class="search-box__label text-gray-700 flex-1">
              Search for companies...
            </div>
          </div>
          <input
            class="rounded shadow-lg border border-solid border-gray-200 text-inherit text-purple-700 w-full p-4 pl-16 search-box__input"
            type="search"
            value={text}
            onInput={this.handleInput}
          />
        </label>
      </form>
    );
  }

  @bind
  private handleInput(event: Event): void {
    this.setState({ text: (event.target as HTMLInputElement).value });
  }
}

export default SearchBox;
export { SearchBox };
