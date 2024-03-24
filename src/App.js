import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Restaurants from './components/Restaurants';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error'
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  console.log("App is renderd -")
  return (
    <div>
      <Navigation />
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element : <Restaurants />
      },
      {
        path: '/about',
        element : <About />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],

    errorElement : <Error />
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

// export default App;
