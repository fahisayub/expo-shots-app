import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScreenShotPage from "../pages/ScreenShotPage";

const MainRoues = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screenshot" element={<ScreenShotPage />} />
    </Routes>
  );
};

export default MainRoues;
