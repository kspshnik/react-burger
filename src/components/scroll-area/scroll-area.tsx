import React, { FC, PropsWithRef } from 'react';

import { TScrollAreaProps } from '../components.props.types';

const ScrollArea : FC<PropsWithRef<TScrollAreaProps>> = React.forwardRef(
  ({ contentClass, children }, ref) => (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  ),
);

export default ScrollArea;
