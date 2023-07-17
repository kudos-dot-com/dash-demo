import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubDetails from './Components/SubDetails/SubDetails';
import AddChap from './Components/AddChapters/AddChap';
import AddQues from './Components/AddQuestions/AddQues';
import DelChap from './Components/DelChapters/DelChap';
import DelQues from './Components/DelQuestions/DelQues';

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
    path: "addchap",
    element: <AddChap/>,
  },

  {
    path: "addques",
    element: <AddQues/>,
  },
  {
    path: "delchap",
    element: <DelChap/>,
  },
  {
    path: "delques",
    element: <DelQues/>,
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