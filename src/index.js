import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubDetails from './Components/SubDetails/SubDetails';
import AddChap from './Components/AddChapters/AddChap';
import AddQues from './Components/AddQuestions/AddQues';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "upload",
    element: <SubDetails/>,
  },

  {
    path: "addtopic",
    element: <AddChap/>,
  },

  {
    path: "addques",
    element: <AddQues/>,
  },
  // {
  //   path: "instruct",
  //   element: <Instruction/>,
  // },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();