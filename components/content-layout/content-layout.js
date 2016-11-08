import React, {PropTypes} from 'react';
import classNames from 'classnames';

import RingComponent from '../ring-component/ring-component';

import ContentLayoutSidebar from './content-layout__sidebar';
import styles from './content-layout.css';

/**
 * @name Content Layout
 * @category Components
 * @framework React
 * @constructor
 * @description A component for simple content layout.
 * @example-file ./content-layout.examples.html
 */

export default class ContentLayout extends RingComponent {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const {children, className, ...restProps} = this.props;
    const classes = classNames(styles.contentLayout, className);

    const childrenArray = React.Children.toArray(children);
    const sidebar = childrenArray.filter(child => child && child.type === ContentLayoutSidebar)[0];
    const contentChildren = childrenArray.filter(child => child !== sidebar);

    return (
      <div
        {...restProps}
        className={classes}
      >
        {sidebar}
        <div className={styles.contentLayoutContent}>
          {contentChildren}
        </div>
      </div>
    );
  }
}