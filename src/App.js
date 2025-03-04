import './App.css';
import Banner from './Components/Banner/Banner';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GalleryPage from './Pages/GalleryPage';
import HomePage from './Pages/HomePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/GalleryPage",
    element: <GalleryPage/>
  }
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
