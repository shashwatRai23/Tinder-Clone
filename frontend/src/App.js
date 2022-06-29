import "./App.css";
import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TinderCards from "./Components/Hero/TinderCards";

const App = () => {
  return (
    <Fragment>
      <Header />
      <TinderCards />
      <Footer />
    </Fragment>
  );
};

export default App;
