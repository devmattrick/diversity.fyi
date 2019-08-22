import { Component, ComponentChild, h } from 'preact';

import CompanyCompare from '../../components/CompanyCompare';
import Container from '../../components/Container';

import * as styles from './style.scss';

class Home extends Component {
  public render(): ComponentChild {
    return (
      <div class={styles.home}>
        <Container>
          <CompanyCompare />
        </Container>
      </div>
    );
  }
}

export default Home;
export { Home };
