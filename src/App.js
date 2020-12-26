import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imgName: '',
    showModal: false,
    lrgImg: '',
    altImg: '',
  };

  // отримує і записує в imgName назву зображення
  getImgName = submitImgName => {
    this.setState({ imgName: submitImgName });
  };

  // змінює стан showModal
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getModalData = (gettinglargeImg, gettingAltImg) => {
    this.setState({
      lrgImg: gettinglargeImg,
      altImg: gettingAltImg,
      showModal: true,
    });
  };

  render() {
    const { getImgName, toggleModal, getModalData } = this;
    const { imgName, showModal, lrgImg, altImg } = this.state;

    return (
      <div className={s.app}>
        <ToastContainer position="bottom-center" autoClose={2500} />
        <Searchbar onSubmit={getImgName} />

        {/* рендерить ImageGallery по умові */}
        <ImageGallery imgName={imgName} getModalData={getModalData} />

        {/* рендерить Modal по умові */}
        {showModal && (
          <Modal toggleModal={toggleModal} largeImg={lrgImg} altImg={altImg} />
        )}
      </div>
    );
  }
}

// починати завантаження нової коллекції з 1
// переміщувати екран при кліку на кнопку Лоад мо
// Приховати розмітку в залежності від довжини колекції
// Показувати кнопку в залежності від довжини масиву
// error https://youtu.be/xoG3l2PgiYY?t=3024
// Модалка https://www.youtube.com/watch?v=w6MW1szKuT4&feature=youtu.be&t=1383

export default App;
