import React from 'react'
import './App.css'
import Body from './components/Body'
import { Provider } from "react-redux"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Search from './components/Search'
import appStore from './Utilies/appStore'


const App = () => {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Body/>
    },
    {
        path: "/search",
        element:<Search/>
    }
])
 
  return (
    <Provider store={appStore}>
      <div>
       <RouterProvider router={appRouter}/>
      </div>
    </Provider>


  )
  
}

export default App