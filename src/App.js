import React from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import ImageGallery from './Components/ImageGallery/ImageGallery';

const App = () => {
  // === State === //
  const [imgName, getImgName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [lrgImg, setLrgImg] = useState('');
  const [altImg, setAltImg] = useState('');

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

  return (
    <div className={s.app}>
      <ToastContainer position="bottom-center" autoClose={2500} />
      <Searchbar onSubmit={getImgName} />

      <ImageGallery imgName={imgName} getModalData={getModalData} />

      {showModal && (
        <Modal toggleModal={toggleModal} largeImg={lrgImg} altImg={altImg} />
      )}
    </div>
  );
};

export default App;
