import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./utils/Poppins/Poppins-Regular.ttf";
import "./main.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
