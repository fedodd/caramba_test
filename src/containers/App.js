import React, { useEffect, useState } from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Form from "../containers/form/form";
import Table from "../containers/table/table";

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
        const cars = result.data;

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
      <main className="main">
        <div className="">
          <h1>
            <span>!</span>Ay caramba!
          </h1>
        </div>
        <Form />
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <div>Loading ...</div> : <Table data={data} />}
      </main>
      <Footer />
    </div>
  );
}

export default hot(App);
