import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, connect, getIn } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import Select from "../../components/UI/select/select";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";
import Radio from "../../components/UI/radio/radio";

import { addCar } from "./../../redux/actions";

import classes from "./form.pcss";

const form = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("");

  const onSubmitHandler = (values) => {
    const car = values;
    car.id = Date.now();
    dispatch(addCar(car));
  };

  const validate = (values) => {
    let errors = {};

    for (const [key, value] of Object.entries(values)) {
      if (key !== "description") {
        if (value === "") {
          errors[key] = "Заполните поле!";
        }
      }
    }

    return errors;
  };

  // const carSchema = Yup.object().shape({
  //   title: Yup.string().required('Заполните поле'),
  //   price: Yup.number().required('Заполните поле'),
  //   year: Yup.string()
  //     .min(1900)
  //     .max(new Date().getFullYear())
  //     .required('Заполните поле'),
  //   color: Yup.string().required('Выберите цвет'),
  //   status: Yup.string().required('Выберите статус'),
  // });

  // if (!values.title) {
  //   errors.title = 'Required';
  // }

  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        year: "",
        description: "",
        color: "",
        status: "",
      }}
      validate={validate}
      // validationSchema={carSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmitHandler(values);
        resetForm();
      }}
      render={({ setFieldValue, values, errors }) => (
        <Form className={classes.form}>
          <fieldset className={classes.fieldset}>
            <Input
              type="text"
              placeholder="Название"
              name="title"
              inputTitle="Название"
              errors={errors}
              // isRequired={true}
            />

            <Input
              labelClass="is__short"
              type="text"
              placeholder="Цена"
              name="price"
              inputTitle="Цена"
              errors={errors}
              // isRequired={true}
            />
            <Input
              labelClass="is__short"
              type="text"
              placeholder="Год"
              name="year"
              inputTitle="Год"
              // errors={errors}
              // isRequired={true}
            />
          </fieldset>
          <Input
            labelClass="is__wide"
            type="text"
            placeholder="Описание"
            name="description"
            inputTitle="Описание"
            errors={errors}
          />
          <fieldset className={classes.fieldset + " " + classes.with__margin}>
            <div className={classes.radioGroup}>
              <legend className={classes.legend}>Цвет</legend>
              <div role="group" aria-labelledby="my-radio-group">
                <Radio
                  name="color"
                  value="white"
                  isActive={values.color === "white"}
                  // errors={errors}
                  // isRequired={true}
                />
                <Radio
                  name="color"
                  value="black"
                  // errors={errors}
                  // isRequired={true}
                />
                <Radio
                  name="color"
                  value="grey"
                  // errors={errors}
                  // isRequired={true}
                />
                <Radio
                  name="color"
                  value="red"
                  // errors={errors}
                  // isRequired={true}
                />
                <Radio
                  name="color"
                  value="green"
                  // errors={errors}
                  // isRequired={true}
                />
              </div>
              <ErrorMessage
                name="color"
                render={(msg) => <span className={classes.error}>{msg}</span>}
              />
            </div>

            <Input
              labelClass="is__short"
              type="select"
              changeHandler={(value) => setFieldValue("status", value, false)}
              name="status"
              // errors={errors}
              // isRequired={true}
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
