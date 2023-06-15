import React from "react";
import Header from "../Header/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
