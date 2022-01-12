import React from 'react';
import { ModalStyle } from './ModalElements';

type IChildren = {
  children: React.ReactNode;
  onClose: any;
  id?: any | undefined;
};

const Modal: React.FC<IChildren> = ({ id = 'modal', children, onClose }) => {
  const handleOutsideClick = (e: any | undefined) => {
    if (e.target.id === id) onClose();
  };

  return (
    <ModalStyle id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </ModalStyle>
  );
};

export default Modal;
