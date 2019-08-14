import { Component, ComponentChild, h } from 'preact';

import { Container } from '../Container';
import { EmojiPeopleGroup } from '../EmojiPeopleGroup';

import * as styles from './style.scss';

class Masthead extends Component {
  public render(): ComponentChild {
    return (
      <section class={styles.masthead}>
        <Container>
          <h1>
            diversity.fyi <EmojiPeopleGroup />
          </h1>
          <p>Find and compare diversity statistics across companies.</p>
        </Container>
      </section>
    );
  }
}

export default Masthead;
export { Masthead };
