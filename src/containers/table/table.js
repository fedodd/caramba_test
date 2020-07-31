import React, { useEffect, useState } from 'react';
import TableRow from './tableRow.js';
import classes from './table.pcss';

const table = (props) => {
  // translate car status.
  const cars = props.data;
  cars.map((car) => {
    let status = '';
    switch (car.status) {
      case 'pednding':
        status = 'Ожидается';
        break;
      case 'out_of_stock':
        status = 'Нет в наличии';
        break;
      case 'in_stock':
        status = 'В наличии';
        break;

      default:
        break;
    }
    car.status = status;
    return car;
  });

  return (
    <table className={classes.table}>
      <caption>Автомобили в наличии</caption>
      <thead>
        <tr>
          <th>Название</th>
          <th>Год</th>
          <th>Цвет</th>
          <th>Статус</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <TableRow car={car} key={car.id} />
        ))}
      </tbody>
    </table>
  );
};

export default table;
