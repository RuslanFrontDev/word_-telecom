import React from "react";
import Content from "../components/Content";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="wt-layout">
      <Helmet>
        <title>Ana Səhifə</title>
        <meta name="description" content="ana səhifə description"/>
      </Helmet>
      <Content />

    </div>
  );
};

export default Home;
