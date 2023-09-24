import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./modules/base/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { setAuthToken } from "./modules/base";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const rootStore: any = localStorage.getItem("persist:root");
if (rootStore) {
  try {
    const rootStoreJson: any = JSON.parse(rootStore);
    try {
      const authJson: any = JSON.parse(rootStoreJson?.auth);
      if (authJson.token) {
        setAuthToken(authJson.token);
      }
    } catch (error) {}
  } catch (error) {}
}
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
