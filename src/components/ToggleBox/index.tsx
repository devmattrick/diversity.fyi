import cx from 'classnames';
import { Component, ComponentChild, h, cloneElement } from 'preact';

import * as styles from './style.scss';

interface ToggleBoxOptionProps {
  name?: string;
  value: string;
  selected?: boolean;

  onClick?: () => void;
}

class ToggleBoxOption extends Component<ToggleBoxOptionProps> {
  private inputRef: HTMLInputElement;

  public render({ children, name, onClick, selected, value }): ComponentChild {
    return (
      <label class={cx(styles.toggleBoxOption, selected && styles.toggleBoxOptionSelected)}>
        {children}
        <input type="radio" name={name} value={value} onClick={onClick} ref={c => (this.inputRef = c)} />
      </label>
    );
  }

  private handleChange(): void {
    this.setState({
      selected: this.inputRef.checked,
    });
  }
}

interface ToggleBoxProps {
  name: string;
  initialValue?: string;

  onChange?: (value: string) => void;
}

interface ToggleBoxState {
  value: string;
}

class ToggleBox extends Component<ToggleBoxProps, ToggleBoxState> {
  public static Option = ToggleBoxOption;

  constructor(props) {
    super(props);

    this.setState({
      value: props.initialValue,
    });
  }

  public render({ children, name }): ComponentChild {
    if (!Array.isArray(children)) children = [children];

    return (
      <div class={styles.toggleBox}>
        {children.map(child =>
          cloneElement(child, {
            name,
            onClick: () => this.setValue(child.props.value),
            selected: child.props.value === this.state.value,
          }),
        )}
      </div>
    );
  }

  public setValue(value: string): void {
    if (value !== this.state.value) {
      this.setState({ value });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }

  public getValue(): string {
    return this.state.value;
  }
}

export default ToggleBox;
export { ToggleBox, ToggleBoxProps, ToggleBoxOption, ToggleBoxOptionProps };
