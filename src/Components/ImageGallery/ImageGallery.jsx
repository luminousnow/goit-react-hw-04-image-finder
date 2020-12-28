import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import fetchGallery from '../../api/apiServise';
import Button from '../Button/Button';
import ErrorView from '../ErrorView';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import { string, func } from 'prop-types';

const ImageGallery = ({ imgName, getModalData }) => {
  // === State === //
  // const { defaultImgCollection, defaultPageNum } = states;
  // const { defaultPageNum } = states;

  const [imgCollection, setImgCollection] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  // console.log(defaultImgCollection);
  // console.log(states);

  // скидає imgCollection і pageNum при зміні запиту
  useEffect(() => {
    setImgCollection([]);
    console.log('до зміни', pageNum);
    setPageNum(1);
    console.log('після зміни', pageNum);
  }, [imgName]);

  //
  useEffect(() => {
    // console.log(defaultImgCollection);
    // console.log(states);

    if (imgName) {
      setStatus('pending');
      fetchGallery(imgName, pageNum)
        .then(gallery => {
          setImgCollection(prevState => [...prevState, ...gallery.hits]);
          setStatus('resolved');
          if (pageNum > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [imgName, pageNum]);

  const onLoadMoreBtnClick = () => {
    setPageNum(prevState => prevState + 1);
  };

  const onImageClick = e => {
    const originalImage = e.target.dataset.original;
    // console.log(originalImage);
    const altImage = e.target.alt;
    // console.log(altImage);
    getModalData(originalImage, altImage);
  };

  // return
  if (status === 'idle') {
    return (
      <div className={s.idle}>
        Давайте розпочнемо. Напишіть назву зображення в полі вище та розпочніть
        пошук
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <Loader
        className={s.loader}
        type="Grid"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }

  if (imgCollection.length === 0 && status === 'resolved') {
    return <ErrorView />;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className={s.imageGallery}>
          {/* {console.log(imgCollection)} */}
          {imgCollection.map(({ webformatURL, largeImageURL, tags }, i) => (
            <ImageGalleryItem
              key={i}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
              onClick={onImageClick}
            />
          ))}
        </ul>

        {/* рендерить Button по умові */}
        {imgCollection.length > 11 && (
          <Button onLoadMoreBtnClick={onLoadMoreBtnClick} />
        )}
      </>
    );
  }

  if (status === 'rejected') {
    return <ErrorView errorMessage={error.message} />;
  }
};

ImageGallery.propTypes = {
  imgName: string.isRequired,
  getModalData: func.isRequired,
};

export default ImageGallery;
