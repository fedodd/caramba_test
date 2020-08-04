import React, { useEffect, useState } from "react";
import TableRow from "./tableRow.js";
import classes from "./table.pcss";

const table = (props) => {
  return (
    <table className={classes.table}>
      <caption>Автомобили в наличии</caption>
      <thead>
        <tr>
          <th>Название</th>
          <th className={classes.descrHeader}></th>
          <th>Год</th>
          <th>Цвет</th>
          <th>Статус</th>
          <th>Цена</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((car) => (
          <TableRow car={car} key={car.id} />
        ))}
      </tbody>
    </table>
  );
};

export default table;
