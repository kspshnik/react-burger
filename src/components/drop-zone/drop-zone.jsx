import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const DropZone = ({
  children, contentClass, hoverClass, handleDrop, type,
}) => {
  const [item, setItem] = useState(null);
  const onDrop = () => {
    if (item) {
      handleDrop(item);
    }
  };
  const [{
    isOver, dropItem,
  }, dropRef] = useDrop({
    accept: type,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      dropItem: monitor.getItem(),
    }),
    drop: onDrop,
  }, [item]);
  useEffect(() => {
    setItem(dropItem);
  }, [dropItem]);
  return (
    <div className={`${contentClass} ${isOver ? hoverClass : ''}`} ref={dropRef}>
      {children}
    </div>
  );
};

DropZone.defaultProps = {
  contentClass: '',
  hoverClass: '',
};

DropZone.propTypes = {
  contentClass: PropTypes.string,
  hoverClass: PropTypes.string,
  handleDrop: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  type: PropTypes.string.isRequired,
};

export default DropZone;
