import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProductDetails from "./ProductDetails";
import Admin from "./Admin";
import EditPage from "./EditPage";
import { mobiles as initialMobiles } from "../data";

const App = () => {
  const [mobiles, setMobiles] = useState([]);

  const updateMobiles = (updateMobiles) => {
    setMobiles(updateMobiles);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/products/:id"
            element={
              <EditPage mobiles={mobiles} updateMobiles={updateMobiles} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
