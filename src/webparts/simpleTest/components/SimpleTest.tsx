import * as React from 'react';
import styles from './SimpleTest.module.scss';

export interface SimpleTestProps {
  color: string;
}

export default class SimpleTest extends React.PureComponent<SimpleTestProps> {
  public render(): React.ReactElement<SimpleTestProps> {
    return (
      <div className={ styles.simpleTest }>
        <div className={ styles.container } style={{ backgroundColor: this.props.color }}>
           TEST
        </div>
      </div>
    );
  }
}
