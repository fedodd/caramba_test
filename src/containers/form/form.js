import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Select from '../../components/UI/select/select';
import Button from '../../components/UI/button/button';
import Input from '../../components/UI/input/input';
import Radio from '../../components/UI/radio/radio';

import { addCar } from './../../redux/actions';

import classes from './form.pcss';

const form = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState('');

  const onSubmitHandler = (values) => {
    const car = values;
    car.id = Date.now() + Math.random().toFixed();

    dispatch(addCar(car));
  };

  return (
    <Formik
      initialValues={{
        title: '',
        price: '',
        year: '',
        description: '',
        color: '',
        status: '',
      }}
      onSubmit={onSubmitHandler}
      render={({ setFieldValue, values, errors }) => (
        <Form className={classes.form}>
          <fieldset className={classes.fieldset}>
            <Input
              type="text"
              placeholder="Название"
              name="title"
              inputTitle="Название"
            />
            <Input
              labelClass="is__short"
              type="text"
              placeholder="Цена"
              name="price"
              inputTitle="Цена"
            />
            <Input
              labelClass="is__short"
              type="text"
              placeholder="Год"
              name="year"
              inputTitle="Год"
            />
          </fieldset>
          <Input
            labelClass="is__wide"
            type="text"
            placeholder="Описание"
            name="description"
            inputTitle="Описание"
          />
          <fieldset className={classes.fieldset + ' ' + classes.with__margin}>
            <div className={classes.radioGroup}>
              <legend className={classes.legend}>Цвет</legend>
              <div>
                <Radio name="color" value="white" />
                <Radio name="color" value="black" />
                <Radio name="color" value="grey" />
                <Radio name="color" value="red" />
                <Radio name="color" value="green" />
              </div>
            </div>

            <Input
              labelClass="is__short"
              type="select"
              changeHandler={(value) => setFieldValue('status', value, false)}
              name="status"
            />
            <Button
              type="submit"
              text="Отправить"
              withIcon={true}
              styleClass="is__submit"
            />
          </fieldset>
        </Form>
      )}
    />
  );
};

export default form;
