import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/Poppins/Poppins-Regular.ttf";
import "./main.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeModel from "./pages/home/home.model.tsx";
import MenuModel from "./pages/menu/menu.model.tsx";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      void updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
        <BrowserRouter>
          <Routes>
            <Route path="/quizz/:id" element={<HomeModel />} />
            <Route path="/quizz" element={<MenuModel />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
