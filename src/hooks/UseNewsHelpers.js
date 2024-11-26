import { useMemo } from 'react';

export const useNewsHelpers = (data) => {
  const decodeHtmlEntities = (text) => {
    if (!text) return '';
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html').documentElement
      .textContent;
  };

  const formatPublishDate = (date) => {
    const publishDate = new Date(date);
    return publishDate.toISOString().slice(0, 16).replace('T', ' ');
  };

  const decodedDescription = useMemo(
    () => decodeHtmlEntities(data?.description),
    [data?.description]
  );

  const decodedTitle = useMemo(
    () => decodeHtmlEntities(data?.title),
    [data?.title]
  );

  const formattedDate = useMemo(
    () => formatPublishDate(data?.published_at),
    [data?.published_at]
  );

  return {
    decodedTitle,
    decodedDescription,
    formattedDate,
  };
};
