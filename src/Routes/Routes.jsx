import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import ErrorPage from "../components/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import BookDetails from "../Pages/BookDetails";
import ListedBooks from "../Pages/ListedBooks";
import Wishlist from "../components/Wishlist";
import ReadBooks from "../components/ReadBooks";
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
        //path:'/',
        element:<Home></Home>,
        },
        {
            path: '/bookDetails/:id',
            element: <BookDetails></BookDetails>,
            // loader:()=>fetch('/data.json')
        },
        {
            path: '/listedBooks',
            element: <ListedBooks></ListedBooks>,
            //  loader:()=>fetch('/data.json'),
        //     children: [ 
        //         {
        //             index: true,
        //             element: <ReadBooks></ReadBooks>,
        //             //  loader:()=>fetch('/data.json'),
        //     },
        //          {
        //     path: 'wishlist',
        //              element: <Wishlist></Wishlist>,
        //     //  loader:()=>fetch('/data.json'),
        // }
      
        //     ]
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
