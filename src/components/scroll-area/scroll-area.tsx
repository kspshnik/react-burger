import React, { FC, PropsWithRef } from 'react';
import PropTypes from 'prop-types';
import { TScrollAreaProps } from '../components.props.types';

const ScrollArea : FC<PropsWithRef<TScrollAreaProps>> = React.forwardRef(
  ({ contentClass, children }, ref) => (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  ),
);

ScrollArea.propTypes = {
  contentClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollArea;
