import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "./../cards/pages/CardsPage";
import AboutPage from "./../pages/AboutPage";
import ErrorPage from "./../pages/ErrorPage";
import Sandbox from "./../sandbox/Sandbox";
import ROUTES from "./routesModel";
import SignupPage from "./../users/pages/SignupPage";
import CardDetailsPage from "./../cards/pages/CardDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path="/sandbox" element={<Sandbox />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
