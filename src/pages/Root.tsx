import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
