import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import ErrorPage from "../components/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import BookDetails from "../Pages/BookDetails";
import ListedBooks from "../Pages/ListedBooks";
import PageToRead from "../Pages/PageToRead";
import ExploreBooks from "../Pages/ExploreBooks";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: '/',
        element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
   
        element:<Home></Home>,
        },
        {
            path: '/bookDetails/:id',
            element: <BookDetails></BookDetails>,
          
        },
        {
            path: '/listedBooks',
            element: <ListedBooks></ListedBooks>,
          
        },
        {
            path: '/pagesToRead',
            element: <PageToRead></PageToRead>
        },
        {
            path:'/exploreBooks',
            element: <ExploreBooks></ExploreBooks>
        },
        {
            path: 'aboutUs',
            element:<AboutUs></AboutUs>
        }
       
    ]
  },
 
])
