import { useEffect, useState } from 'react';
import s from './ExternalLinkModal.module.scss';

export default function ExternalLinkModal({
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

  if (!isOpen) return null;

  return (
    <div
      className={`${s.modal_overlay} ${isOpen ? s.show : ''}`}
      onClick={onClose}
    >
      <div className={s.modal}>
        <p>{message}</p>
        <div className={s.buttons}>
          <button onClick={onConfirm} className={s.confirm}>
            Confirm
          </button>
          <button onClick={onClose} className={s.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
