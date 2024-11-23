import { useEffect, useState } from 'react';
import s from './ConfirmActionModal.module.scss';
import Button from '../Button/Button';

export default function ConfirmActionModal({
  isOpen,
  onClose,
  onConfirm,
  message,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.modal_overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <p>{message}</p>
        <div className={s.buttons}>
          <Button onClick={onConfirm} text='Confirm' color='green' />
          <Button onClick={onClose} text='Cancel' color='red' />
        </div>
      </div>
    </div>
  );
}
