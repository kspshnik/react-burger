import React from 'react';

import { TScrollAreaProps } from '../../types/components.props.types';

const ScrollArea = React.forwardRef<HTMLDivElement | HTMLHeadingElement, TScrollAreaProps>(
  ({ contentClass, children }, ref) => (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  ),
);

export default ScrollArea;
