import s from './NewsCard.module.scss';
import { useState } from 'react';
import ExternalLinkModal from '../ExternalLinkModal/ExternalLinkModal';

export default function NewsCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [externalUrl, setExternalUrl] = useState('');

  const handleReadMoreClick = (url) => {
    setExternalUrl(url);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.open(externalUrl, '_blank');
  };

  const decodeHtmlEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, 'text/html')
      .documentElement.textContent;
    return decodedString;
  };

  const publishDate = new Date(data.published_at);
  const formattedPublishDate = publishDate
    .toISOString()
    .slice(0, 16)
    .replace('T', ' ');

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
            <span className={s.publish_date}>{formattedPublishDate}</span>
          </div>
          <h2>{decodeHtmlEntities(data.title)}</h2>
          <p>{decodeHtmlEntities(data.description)}</p>

          {data.author ? (
            <span className={s.author}>Author: {data.author}</span>
          ) : (
            ''
          )}
        </div>

        <button
          onClick={() => handleReadMoreClick(data.url)}
          className={s.read_more_button}
        >
          Read in full...
        </button>
      </div>

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        message='You are about to visit an external website. Do you want to proceed?'
      />
    </div>
  );
}
