import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Header, Sidebar } from "./components";

const App = () => {
  return (
    <div className="w-full object-top	bg-gray-50 h-fit">
      <Header />
      <div className=" flex place-content-center">
        <div className="flex justify-between gap-8 w-5/6	h-screen p-20">
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
