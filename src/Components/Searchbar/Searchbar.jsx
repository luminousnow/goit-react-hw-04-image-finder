import React, { useState } from 'react';
import { func } from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
const Searchbar = ({ getImgName, resetStates }) => {
  // === State === //
  const [imgName, setImgName] = useState('');

  // зміна state при зміні поля пошуку
  const onNameChange = e => {
    const inputValue = e.currentTarget.value.toLowerCase();

    setImgName(inputValue);
  };

  // Cабміт форми
  const onSubmitForm = e => {
    e.preventDefault();

    // перевірка чи поле не є пустим
    if (imgName.trim() === '') {
      return toast.error('Ведіть назву зображення');
    }

    // надсилає пропом imgCollection у Арр
    resetStates();
    getImgName(imgName);
    // console.log(imgName);
  };

  return (
    <>
      <header className={s.searchbar}>
        <form onSubmit={onSubmitForm} className={s.searchForm}>
          <button type="submit" className={s.searchForm__button}>
            <span className={s.searchForm__button__label}>Search</span>
          </button>

          <input
            value={imgName}
            onChange={onNameChange}
            className={s.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  getImgName: func.isRequired,
  resetStates: func.isRequired,
};

export default Searchbar;
