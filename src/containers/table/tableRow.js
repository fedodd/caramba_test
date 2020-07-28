import React from 'react';

const tableRow = (props) => {
  return (
    <tr>
      <td>
        Имя<p>Доп опция</p>
      </td>
      <td>2012</td>
      <td>черный</td>
      <td>ожидается</td>
      <td>
        1689000 руб. <button>Удалить</button>
      </td>
    </tr>
  );
};

export default tableRow;
