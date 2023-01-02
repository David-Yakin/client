import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "./../cards/pages/CardsPage";
import AboutPage from "./../pages/AboutPage";
import ErrorPage from "./../pages/ErrorPage";
import Sandbox from "./../sandbox/Sandbox";
import ROUTES from "./routesModel";
import SignupPage from "./../users/pages/SignupPage";
import CardDetailsPage from "./../cards/pages/CardDetailsPage";
import DataFetch from "./../sandbox/DataFetch";
import Counter from "./../sandbox/custom-hook/Counter";
import FatherPropTypes from "./../sandbox/propTypes/FatherPropTypes";
import FatherComp from "./../sandbox/props/FatherComp";
import LifeCycleHooks from "./../sandbox/LifeCycleHooks";
import UseCallBackComp from "./../sandbox/Memoization/UseCallBackComp";
import Loops from "./../sandbox/Loops";
import OnClick from "./../sandbox/events/OnClick";
import UseMemo from "./../sandbox/Memoization/UseMemo";
import AxiosComp from "./../sandbox/axios/AxiosComp";
import UseContext from "./../sandbox/use-context/UseContext";
import ThemeProvider from "../sandbox/use-context/exeOne/ThemeProvider";
import A from "../sandbox/use-context/exeTwo/components/A";
import Snackbar from "../sandbox/mui-sandbox/snackbar/Snackbar";
import MuiTextField from "../sandbox/mui-textfield/MuiTextField";
import FormTest from "../sandbox/forms/FormTest";
import LoginPage from "./../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import MuiBottomNavigators from "../sandbox/layout/footer/MuiBottomNavigators";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="/sandbox" element={<Sandbox />}>
        <Route path="fetch" element={<DataFetch />} />
        <Route path="custom-hook" element={<Counter />} />
        <Route path="propTypes" element={<FatherPropTypes />} />
        <Route path="props" element={<FatherComp />} />
        <Route path="lifecycle" element={<LifeCycleHooks />} />
        <Route path="use-callback" element={<UseCallBackComp />} />
        <Route path="loops" element={<Loops />} />
        <Route path="events" element={<OnClick />} />
        <Route path="use-memo" element={<UseMemo />} />
        <Route path="axios" element={<AxiosComp />} />
        <Route path="snackbar" element={<Snackbar />} />
        <Route path="text-field" element={<MuiTextField />} />
        <Route path="form" element={<FormTest />} />
        <Route path="bottom-nav" element={<MuiBottomNavigators />} />
        <Route path="use-context" element={<UseContext />}>
          <Route path="exe-one" element={<ThemeProvider />} />
          <Route path="exe-two" element={<A />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
