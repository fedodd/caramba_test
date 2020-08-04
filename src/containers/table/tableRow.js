import React, { useEffect } from "react";
import classes from "./table.pcss";

const tableRow = (props) => {
  const colorStyle =
    props.car.color === "white"
      ? {
          backgroundColor: `var(--color-car_${props.car.color})`,
          border: "1px solid #DDDDDD",
        }
      : { backgroundColor: `var(--color-car_${props.car.color})` };

  console.log(colorStyle);

  return (
    <tr>
      <td>
        {props.car.title}
        <p className={classes.descr}>{props.car.description}</p>
      </td>
      <td>{props.car.year}</td>
      <td>
        <div className={classes.color} style={colorStyle}></div>
      </td>
      <td>{props.car.status}</td>
      <td>
        {props.car.price} руб. <button>Удалить</button>
      </td>
    </tr>
  );
};

export default tableRow;
