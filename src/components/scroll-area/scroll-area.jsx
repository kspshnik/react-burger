import React     from "react";
import PropTypes from "prop-types";

const ScrollArea = React.forwardRef(({contentClass, children}, ref ) =>  {
  return (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  )
});

ScrollArea.defaultProps = {
  ref: null,
};
ScrollArea.propTypes = {
  contentClass : PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ref: PropTypes.node,
};

export default ScrollArea;
