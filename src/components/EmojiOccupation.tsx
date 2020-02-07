import { Component, ComponentChild, h } from 'preact';

import randomEmoji from '../utils/emoji';

class EmojiOccupation extends Component {
  public render(): ComponentChild {
    return <span class="w-8 text-center inline-block">{randomEmoji()}</span>;
  }
}

export default EmojiOccupation;
export { EmojiOccupation };
