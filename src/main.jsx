import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import Dashboard from './Layout/Dashboard.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const client = new QueryClient()
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      // {
      //   path:'/tasks',
      //   element:<Tasks></Tasks>
      // },
      // {
      //   path:'/taskdetails/:id',
      //   element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
      //   loader: ({params})=>fetch(`https://task-management-server-peach.vercel.app/api/v1/tasks/${params.id}`, {
      //     method: 'GET',
      //     credentials: 'include'
      // })
      // },
      // {
      //   path:'/update/:id',
      //   element:<PrivateRoute><Update></Update></PrivateRoute>,
      //   loader: ({params})=>fetch(`https://task-management-server-peach.vercel.app/api/v1/tasks/${params.id}`, {
      //     method: 'GET',
      //     credentials: 'include'
      // })
      // },
      // {
      //   path:'/todo',
      //   element:<PrivateRoute><ToDo></ToDo></PrivateRoute>
      // },
      // {
      //   path:'/add',
      //   element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
      // }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<Profile></Profile>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <QueryClientProvider client={client}>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
