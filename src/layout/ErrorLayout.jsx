import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <>
      <h1> ERRRRORRRRRR </h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ErrorLayout;
