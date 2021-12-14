import React from "react";

const ScrollArea = React.forwardRef(({contentClass, children}, ref ) =>  {
  return (
    <div ref={ref} className={contentClass}>
      {children}
    </div>
  )
});
export default ScrollArea;
