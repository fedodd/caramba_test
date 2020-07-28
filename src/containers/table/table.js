import React from 'react';
import TableRow from './tableRow.js';

const table = () => {
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
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default table;
