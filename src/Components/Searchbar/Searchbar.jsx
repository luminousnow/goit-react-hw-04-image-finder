import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imgName: '',
  };

  // зміна state при зміні поля пошуку
  onNameChange = e => {
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };

  // Cабміт форми
  onSubmitForm = e => {
    const { imgName } = this.state;

    e.preventDefault();

    // перевірка чи поле не є пустим
    if (imgName.trim() === '') {
      return toast.error('Ведіть назву зображення');
    }

    // надсилає imgCollection у Арр
    this.props.onSubmit(imgName);
  };

  render() {
    const { onSubmitForm, onNameChange } = this;

    return (
      <header className={s.searchbar}>
        <form onSubmit={onSubmitForm} className={s.searchForm}>
          <button type="submit" className={s.searchForm__button}>
            <span className={s.searchForm__button__label}>Search</span>
          </button>

          <input
            value={this.state.imgName}
            onChange={onNameChange}
            className={s.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
