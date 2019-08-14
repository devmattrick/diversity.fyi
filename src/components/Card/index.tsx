import cx from 'classnames';
import { Component, ComponentChild, h } from 'preact';

import * as styles from './style.scss';

interface CardProps {
  unpadded?: boolean;
}

class Card extends Component<CardProps> {
  public render({ children, unpadded }): ComponentChild {
    return <div class={cx(styles.card, unpadded && styles.cardUnpadded)}>{children}</div>;
  }
}

export default Card;
export { Card, CardProps };
