import s from './SideNewsItem.module.scss';

import { useState } from 'react';
import { useNewsHelpers } from '../../hooks/UseNewsHelpers';
import ConfirmActionModal from '../ConfirmActionModal/ConfirmActionModal';

export default function SideNewsItem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [externalUrl, setExternalUrl] = useState('');
  const { decodedDescription, formattedDate, decodedTitle } =
    useNewsHelpers(data);

  const handleItemClick = (url) => {
    setExternalUrl(url);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.open(externalUrl, '_blank');
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const truncatedTitle = truncateText(decodedTitle, 70);
  const truncatedDesc = truncateText(decodedDescription, 150);

  return (
    <>
      <div onClick={() => handleItemClick(data.url)} className={s.item}>
        <div className={s.item_text_container}>
          <div className={s.item_top}>
            <span>{data.source}</span>
            <span>{formattedDate}</span>
          </div>

          <h4>{truncatedTitle}</h4>
          <p>{truncatedDesc}</p>
        </div>

        {data.image && (
          <div className={s.item_img_container}>
            <img src={data.image} alt='News image' />
          </div>
        )}
      </div>

      <ConfirmActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        message='You are about to visit an external website. Do you want to proceed?'
      />
    </>
  );
}
