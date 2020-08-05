import React, { useEffect, useState } from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Form from "../containers/form/form";
import Table from "../containers/table/table";

import classes from "./app.pcss";

function App() {
  const [data, setData] = useState([]);
  const dataUrl =
    "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json";

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(dataUrl);
        const cars = result.data.map((car) => {
          // fix bug with repeating name or what is it? test for a long title? if it's bug need more props for how to fix it. method with set not good.
          const title = [...new Set(car.title.split(" "))].join(" ");
          car.title = title;
          car.status === "pednding" ? (car.status = "pending") : null;
          return car;
        });

        setData(cars);
        setIsLoading(false);
      } catch (error) {
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
        <h1 className={classes.title}>¡Ay caramba!</h1>
        <Form />
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <div>Loading ...</div> : <Table data={data} />}
      </main>
      <Footer />
    </div>
  );
}

export default hot(App);
