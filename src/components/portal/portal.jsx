import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ handleClose, children }) => {
  const portalElement = useMemo(() => document.createElement('div'), []);
  const portalRoot = useMemo(() => document.getElementById('popup'), []);
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    portalRoot.appendChild(portalElement);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      portalRoot.removeChild(portalElement);
    };
  }, [handleClose, portalRoot, portalElement]);

  return ReactDOM.createPortal(children, portalElement);
};

Portal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default Portal;
