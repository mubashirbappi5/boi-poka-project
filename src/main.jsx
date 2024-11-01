import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/errorPage/ErrorPage';
import Home from './component/Home/Home';
import ListedBooks from './component/Listed Books/ListedBooks';
import PagestoRead from './component/PagestoRead/PagestoRead';
import BooksDitails from './component/Books/BooksDitails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"listed-book",
        element:<ListedBooks/>

      },{
        path:"pages-to-read",
        element:<PagestoRead/>
      },
      {
        path:"books/:bookId",
        loader:()=>fetch('/public/booksData.json'),
        element:<BooksDitails/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
