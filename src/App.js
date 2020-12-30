import s from './App.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import fetchGallery from './api/apiServise';
import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';
import ErrorView from './Components/ErrorView/ErrorView';
import ImageGallery from './Components/ImageGallery/ImageGallery';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  // === State === //
  const [imgName, getImgName] = useState('');
  const [imgCollection, setImgCollection] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const [lrgImg, setLrgImg] = useState('');
  const [altImg, setAltImg] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!imgName) {
      return;
    }

    setStatus(Status.PENDING);
    fetchGallery(imgName, pageNum)
      .then(gallery => {
        setImgCollection(prevState => [...prevState, ...gallery.hits]);
        setStatus(Status.RESOLVED);
        if (pageNum > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [imgName, pageNum]);

  // скидає imgCollection і pageNum при зміні запиту
  const resetStates = () => {
    setImgCollection([]);
    setPageNum(1);
  };

  // тоглить модалку
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // отримує велике зображення, альт і змінює видимість модалки на "true"
  const getModalData = (gettinglargeImg, gettingAltImg) => {
    setLrgImg(gettinglargeImg);
    setAltImg(gettingAltImg);
    setShowModal(true);
  };

  const onLoadMoreBtnClick = () => {
    setPageNum(prevState => prevState + 1);
  };

  return (
    <div className={s.app}>
      <ToastContainer position="bottom-center" autoClose={2500} />
      <Searchbar getImgName={getImgName} resetStates={resetStates} />
      {showModal && (
        <Modal toggleModal={toggleModal} largeImg={lrgImg} altImg={altImg} />
      )}

      {status === Status.IDLE && (
        <div className={s.idle}>
          Давайте розпочнемо. Напишіть назву зображення в полі вище та
          розпочніть пошук
        </div>
      )}

      {status === Status.PENDING && (
        <Loader
          className={s.loader}
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}

      {imgCollection.length === 0 && status === Status.RESOLVED && (
        <ErrorView />
      )}

      {status === Status.RESOLVED && (
        <ImageGallery
          imgCollection={imgCollection}
          getModalData={getModalData}
        />
      )}

      {status === Status.RESOLVED && imgCollection.length > 11 && (
        <Button onLoadMoreBtnClick={onLoadMoreBtnClick} />
      )}

      {status === Status.REJECTED && <ErrorView errorMessage={error.message} />}
    </div>
  );
};

export default App;
