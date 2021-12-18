import React from 'react';
import PropTypes from 'prop-types';

const ScrollArea = React.forwardRef(({ contentClass, children }, ref) => (
  <div className={contentClass} ref={ref}>
    {children}
  </div>
));

ScrollArea.propTypes = {
  contentClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollArea;
