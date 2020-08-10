import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader/root';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Form from '../containers/form/form';
import Table from '../containers/table/table';
import { fetchCars, setErrorOnLoad } from './../redux/actions';

import classes from './app.pcss';

function App() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars, shallowEqual);

  const dataUrl =
    'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(dataUrl);
        dispatch(fetchCars(result.data));
        setIsLoading(false);
      } catch (error) {
        dispatch(setErrorOnLoad(error));
        setIsError(true);

        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main className={classes.main}>
        <div className={classes.holder}>
          <h1 className={classes.title}>¡Ay caramba!</h1>
          <Form />
        </div>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <div>Loading ...</div> : <Table data={cars} />}
      </main>
      <Footer />
    </div>
  );
}

export default hot(App);
