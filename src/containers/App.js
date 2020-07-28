import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Form from '../containers/form/form';
import Table from '../containers/table/table';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div id="app">
        <Header />
        <main className="main">
          <div className="">
            <h1>
              <span>!</span>Ay caramba!
            </h1>
          </div>
          <Form />
          <Table />
        </main>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
