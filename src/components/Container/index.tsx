import cx from 'classnames';
import { Component, ComponentChild, h } from 'preact';

import * as styles from './style.scss';

interface ContainerProps {
  fluid?: boolean;
}

class Container extends Component<ContainerProps> {
  public render({ children, fluid }): ComponentChild {
    return <div class={cx(styles.container, fluid && styles.containerFluid)}>{children}</div>;
  }
}

export default Container;
export { Container, ContainerProps };
