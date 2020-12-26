import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import fetchGallery from '../../api/apiServise';
import Button from '../Button/Button';
import ErrorView from '../ErrorView';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    imgCollection: [],
    pageNum: 1,
    error: null,
    status: 'idle',
  };

  // Новий Сабміт
  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevProps.imgName;
    const prevPageNum = prevState.pageNum;
    const currentImgName = this.props.imgName;
    const { pageNum } = this.state;

    // якщо різні імена то скидає Колекцію
    if (prevImgName !== currentImgName) {
      this.setState({ imgCollection: [], pageNum: 1 });
    }

    // При зміні імені
    if (prevImgName !== currentImgName || prevPageNum !== pageNum) {
      this.setState({ status: 'pending' });

      // Вирішити проблему з проставленням по дефолту pageNum: 1 і imgCollection: []
      fetchGallery(currentImgName, pageNum)
        .then(gallery => {
          this.setState(prevState => ({
            imgCollection: [...prevState.imgCollection, ...gallery.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum + 1,
    }));
  };

  onImageClick = e => {
    const originalImage = e.target.dataset.original;
    // console.log(originalImage);
    const altImage = e.target.alt;
    // console.log(altImage);
    this.props.getModalData(originalImage, altImage);
  };

  render() {
    const { imgCollection, error, status } = this.state;
    const { onLoadMoreBtnClick, onImageClick } = this;

    if (status === 'idle') {
      return (
        <div className={s.idle}>
          Давайте розпочнемо. Напишіть назву зображення в полі вище та
          розпочніть пошук
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
  }
}

export default ImageGallery;
