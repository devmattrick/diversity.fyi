import { Component, ComponentChild, h } from 'preact';

import { Container } from '../Container';
import { EmojiPeopleGroup } from '../EmojiPeopleGroup';

import { masthead } from './style.scss';

class Masthead extends Component {
  public render(): ComponentChild {
    return (
      <section class={masthead}>
        <Container>
          <h1>
            diversity.fyi <EmojiPeopleGroup />
          </h1>
          <p>Compare diversity statistics across companies.</p>
        </Container>
      </section>
    );
  }
}

export default Masthead;
export { Masthead };
