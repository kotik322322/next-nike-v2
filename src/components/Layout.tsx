"use client";

import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children} </PersistGate>
    </Provider>
  );
};

export default Layout;