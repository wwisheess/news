import s from './NewsCard.module.scss';
import { useState } from 'react';
import ConfirmActionModal from '../ConfirmActionModal/ConfirmActionModal';
import { useNewsHelpers } from '../../hooks/UseNewsHelpers';
import Button from '../Button/Button';

export default function NewsCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [externalUrl, setExternalUrl] = useState('');
  const { decodedDescription, formattedDate, decodedTitle } =
    useNewsHelpers(data);

  const handleReadMoreClick = (url) => {
    setExternalUrl(url);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.open(externalUrl, '_blank');
  };

  return (
    <div className={s.news_card}>
      {data.image && (
        <div className={s.news_img_container}>
          {<img src={data.image} alt='News image' />}
        </div>
      )}

      <div className={s.news_text_container}>
        <div className={s.text_container_inner}>
          <div className={s.source_date_container}>
            <span>Source: {data.source} </span>
            <span className={s.publish_date}>{formattedDate}</span>
          </div>
          <h2>{decodedTitle}</h2>
          <p>{decodedDescription}</p>

          {data.author && (
            <span className={s.author}>Author: {data.author}</span>
          )}
        </div>

        <Button
          text='Read in full...'
          onClick={() => handleReadMoreClick(data.url)}
        />
      </div>

      <ConfirmActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        message='You are about to visit an external website. Do you want to proceed?'
      />
    </div>
  );
}
