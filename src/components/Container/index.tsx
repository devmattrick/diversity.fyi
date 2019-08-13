import cx from 'classnames';
import { Component, ComponentChild, h } from 'preact';

import { container, containerFluid } from './style.scss';

interface ContainerProps {
  fluid?: boolean;
}

class Container extends Component<ContainerProps> {
  public render({ children, fluid }): ComponentChild {
    return <div class={cx(container, fluid && containerFluid)}>{children}</div>;
  }
}

export default Container;
export { Container, ContainerProps };
