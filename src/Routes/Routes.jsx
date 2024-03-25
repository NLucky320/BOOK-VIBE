import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import ErrorPage from "../components/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import BookDetails from "../Pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: '/',
        element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        //path:'/',
        element:<Home></Home>,
        },
        {
            path: '/bookDetails/:id',
            element: <BookDetails></BookDetails>,
            loader:()=>fetch('/data.json')
        }
      
    ]
  },
 
])
