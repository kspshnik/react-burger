import React from "react";

const ScrollArea = React.forwardRef(({contentClass, children}, ref ) =>  {
  return (
    <div className={contentClass} ref={ref}>
        {children}
    </div>
  )
});

export default ScrollArea;
