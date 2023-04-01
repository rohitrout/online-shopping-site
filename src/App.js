import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart'

const AppLayout = () => {
  return (
    <div>
    <Header/>   
    <Outlet/>
    <Footer/>
  </div>
  )
}
function App() {

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element :<Body/>
      },
      {
        path:"/products/:id",
        element : <Products/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
