import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ smallImg, largeImg, alt, onImageClick }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={smallImg}
        data-original={largeImg}
        onClick={onImageClick}
        alt={alt}
        className={s.imageGalleryItem__image}
      />
    </li>
  );
}

export default ImageGalleryItem;
