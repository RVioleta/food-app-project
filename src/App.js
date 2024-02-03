import "./App.css";
import * as React from "react";

import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Progress from "./components/Progress";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import LogOut from "./components/LogOut";
import Support from "./components/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMeal from "./components/AddMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login/",
    element: <LoginPage/>,
   
  },

  {
    path: "/register/",
    element: <Register/>,
   
  }, 

  {
    path: "/progress/",
    element: <Progress/>,
  },

  {
    path: "/stats/",
    element: <Stats/>,
  },

  {
    path: "/settings/",
    element: <Settings/>,
  },

  {
    path: "/logout/",
    element: <LogOut/>,
  }, 

  {
    path: "/addMeal/",
    element: <AddMeal/>,
  },

  {
    path: "/support/",
    element: <Support/>,
  },


  
]);
function App() {
  return (
    <div className="App">     
         
     
        <React.StrictMode>
         <RouterProvider router={router} />
       </React.StrictMode>   
    </div>
  );
}

export default App;
