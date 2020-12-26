import React from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import ImageGallery from './Components/ImageGallery/ImageGallery';

const App = () => {
  // === State === //
  const [imgName, setImgName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [lrgImg, setLrgImg] = useState('');
  const [altImg, setAltImg] = useState('');

  // reverce showModal state
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // get large img, alt & change modal state to "true"
  const getModalData = (gettinglargeImg, gettingAltImg) => {
    setLrgImg(gettinglargeImg);
    setAltImg(gettingAltImg);
    setShowModal(true);
  };

  return (
    <div className={s.app}>
      <ToastContainer position="bottom-center" autoClose={2500} />
      <Searchbar onSubmit={setImgName} />

      <ImageGallery imgName={imgName} getModalData={getModalData} />

      {showModal && (
        <Modal toggleModal={toggleModal} largeImg={lrgImg} altImg={altImg} />
      )}
    </div>
  );
};

export default App;
