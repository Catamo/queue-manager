import React from "react";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    );
  }
}
