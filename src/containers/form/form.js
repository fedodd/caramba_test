import React from 'react';
import classes from './form.pcss';

const form = () => {
  return (
    <form>
      <label>
        <span>Название</span>
        <input type="text" placeholder="Название"></input>
      </label>
      <label>
        <span>Цена</span>
        <input type="text" placeholder="Цена"></input>
      </label>
      <label>
        <span>Год</span>
        <input type="text" placeholder="Год"></input>
      </label>
      <label>
        <span>Описание</span>
        <input type="text" placeholder="Описание"></input>
      </label>
      <fieldset>
        <label htmlFor="color">Цвет</label>
        <input type="radio" name="color" value="white"></input>
        <input type="radio" name="color" value="black"></input>
        <input type="radio" name="color" value="grey"></input>
        <input type="radio" name="color" value="red"></input>
        <input type="radio" name="color" value="green"></input>
      </fieldset>
      <label>
        Статус
        <select>
          <option>В наличии</option>
          <option>Ожидается</option>
          <option>Нет в наличии</option>
        </select>
      </label>
    </form>
  );
};

export default form;
