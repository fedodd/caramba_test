import React, { useEffect } from 'react';

const tableRow = (props) => {
  return (
    <tr>
      <td>
        {props.car.title}
        <p>{props.car.description}</p>
      </td>
      <td>{props.car.year}</td>
      <td>{props.car.color}</td>
      <td>{props.car.status}</td>
      <td>
        {props.car.price} руб. <button>Удалить</button>
      </td>
    </tr>
  );
};

export default tableRow;
