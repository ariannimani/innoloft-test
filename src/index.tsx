import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { store } from "./redux/store";
import App from "./App";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  //</React.StrictMode>
);
