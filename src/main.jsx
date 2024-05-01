import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './allcomponents/root';
import Home from './allcomponents/home';
import Errpage from './allcomponents/errpage';
import Context from './allcomponents/contaxt';
import Signin from './allcomponents/signin';
import Resigster from './allcomponents/resigter';
import Addcraft from './allcomponents/addcraft';
import Artdetails from './allcomponents/artdetails';
import Allcraft from './allcomponents/allcraftart';
import Allonedetails from './allcomponents/allonedetail';
import Mycraft from './allcomponents/myartcraf';
import Mydataadd from './allcomponents/mydata';
import Updatepage from './allcomponents/update';
import Subcategorysection from './allcomponents/subcategory';
import Onlyprotect from './allcomponents/protecting';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errpage></Errpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allcraftart',
        element: <Allcraft></Allcraft>
      },
      {
        path: '/login',
        element: <Signin></Signin>
      },
      {
        path: '/register',
        element: <Resigster></Resigster>
      },
      {
        path: '/myartcraft',
        loader: () => fetch('https://art-five-mu.vercel.app/myallart'),
        element: <Onlyprotect><Mycraft></Mycraft></Onlyprotect>
      },
      {
        path: '/mydataadding',
        element: <Onlyprotect><Mydataadd></Mydataadd></Onlyprotect>
      },
      {
        path: '/subcategorysec/:allsub',
        loader: ({params})  => fetch(`https://art-five-mu.vercel.app/subcategorysec/${params.allsub}`) ,
        element: <Onlyprotect><Subcategorysection></Subcategorysection></Onlyprotect>
      },

      {
        path: '/myallart/:id',
        loader: ({params}) => fetch(`https://art-five-mu.vercel.app/myallart/${params.id}`),
        element: <Onlyprotect><Updatepage></Updatepage></Onlyprotect>
      },
      {
        path: '/art/:id',
        loader: ({params}) => fetch(`https://art-five-mu.vercel.app/art/${params.id}`),
        element: <Onlyprotect><Artdetails></Artdetails></Onlyprotect>
      },
      {
        path: '/allcraftart/allart/:id',
        loader: ({params}) => fetch(`https://art-five-mu.vercel.app/allcraftart/allart/${params.id}`),
        element: <Onlyprotect><Allonedetails></Allonedetails></Onlyprotect>
      },
      {
        path: '/addcraft',
        element: <Onlyprotect><Addcraft></Addcraft></Onlyprotect>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
   </React.StrictMode>,
)
