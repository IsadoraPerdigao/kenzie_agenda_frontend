import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactsProvider } from "./providers/ContactsContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </UserProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ color: "darkgray" }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
