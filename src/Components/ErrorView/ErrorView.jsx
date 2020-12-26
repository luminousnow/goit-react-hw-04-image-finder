import React from 'react';
import s from './ErrorView.module.css';
import omgImage from './img/omg.jpg';

function ErrorView({ errorMessage }) {
  return (
    <div role="alert" className={s.error__box}>
      <img src={omgImage} alt="child" width="320" className={s.errorImg} />
      <div>{errorMessage} </div>
      <div>{'OMG такого зображення в нас не знайшлося'}</div>
    </div>
  );
}

export default ErrorView;
