import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const smallImg = this.props.smallImg;
    const largeImg = this.props.largeImg;
    const alt = this.props.alt;
    const onClick = this.props.onClick;

    return (
      <li className={s.imageGalleryItem}>
        <img
          src={smallImg}
          data-original={largeImg}
          onClick={onClick}
          alt={alt}
          className={s.imageGalleryItem__image}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
