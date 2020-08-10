import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/UI/button/button';
import classes from './table.pcss';
import { deleteCar } from './../../redux/actions';

const tableRow = (props) => {
  const dispatch = useDispatch();

  const colorStyle =
    props.car.color === 'white'
      ? {
          backgroundColor: `var(--color-car_${props.car.color})`,
          border: '1px solid #DDDDDD',
        }
      : {
          backgroundColor: `var(--color-car_${props.car.color})`,
        };

  // translate car status.
  let status = '';

  // translate status
  switch (props.car.status) {
    case 'pending':
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

  // thousand separator in price
  const price = isNaN(props.car.price)
    ? props.car.price
    : props.car.price.toLocaleString('ru-RU');

  // with description
  let trClasses = classes.row;
  let addedStyle = null;
  let descrNode = null;

  if (props.car.description !== '') {
    trClasses = trClasses + ' ' + classes.with_descr;
    addedStyle = { marginBottom: 0 };
    descrNode = <p className={classes.descrNode}>{props.car.description}</p>;
  }

  return (
    <tr className={trClasses}>
      <td className={classes.td + ' ' + classes.is__title}>
        <span>{props.car.title}</span>
        {descrNode}
      </td>
      <td className={classes.td + ' ' + classes.is__descr} style={addedStyle}>
        {props.car.description}
      </td>
      <td className={[classes.td, classes.is__year, classes.is__alt].join(' ')}>
        {props.car.year}
      </td>
      <td className={classes.td + ' ' + classes.is__color}>
        <div className={classes.color} style={colorStyle}></div>
      </td>
      <td className={classes.td + ' ' + classes.is__alt}>{status}</td>
      <td className={classes.td + ' ' + classes.is__price}>{price} руб.</td>
      <td
        className={[classes.td, classes.is__button, classes.is__alt].join(' ')}>
        <Button
          type="button"
          text="Удалить"
          styleClass="is__delete"
          withIcon={false}
          onClickHandler={(e) => dispatch(deleteCar(props.car.id))}
        />
      </td>
    </tr>
  );
};

export default tableRow;
