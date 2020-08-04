import React, { useEffect } from "react";
import classes from "./table.pcss";

const tableRow = (props) => {
  const colorStyle =
    props.car.color === "white"
      ? {
          backgroundColor: `var(--color-car_${props.car.color})`,
          border: "1px solid #DDDDDD",
        }
      : {
          backgroundColor: `var(--color-car_${props.car.color})`,
        };

  // translate car status.
  let status = "";

  switch (props.car.status) {
    case "pending":
      status = "Ожидается";
      break;
    case "out_of_stock":
      status = "Нет в наличии";
      break;
    case "in_stock":
      status = "В наличии";
      break;

    default:
      break;
  }

  return (
    <tr className={classes.row}>
      <td>{props.car.title}</td>
      <td className={classes.descr}>{props.car.description}</td>
      <td className={classes.is__alt}>{props.car.year}</td>
      <td>
        <div className={classes.color} style={colorStyle}></div>
      </td>
      <td className={classes.is__alt}>{status}</td>
      <td>{props.car.price} руб.</td>
      <td className={classes.is__alt}>
        <button>Удалить</button>
      </td>
    </tr>
  );
};

export default tableRow;
