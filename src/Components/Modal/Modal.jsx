import React, { useEffect } from 'react';
import { func, string } from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ toggleModal, largeImg, altImg }) {
  useEffect(() => {
    // console.log('вішаємо addEventListener');
    window.addEventListener('keydown', hendleKeyDown);

    return () =>
      // eslint-disable-next-line no-sequences
      // console.log('знімаємо addEventListener'),
      window.removeEventListener('keydown', hendleKeyDown);
  });

  //  закриває модалку по натисканню Escape
  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  // закриває модалку по кліку на Backdrop
  const hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={hendleBackdropClick}>
      <div className={s.modal}>
        <img src={largeImg} alt={altImg} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  toggleModal: func.isRequired,
  largeImg: string.isRequired,
  altImg: string.isRequired,
};

export default Modal;
