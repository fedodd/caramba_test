import React, { useEffect, useState } from 'react';
import TableRow from './tableRow.js';

const table = (props) => {
  return (
    <table>
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
        {props.data.map((car) => (
          <TableRow car={car} />
        ))}
      </tbody>
    </table>
  );
};

export default table;
