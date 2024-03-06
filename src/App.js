import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home, MealDetails, Error, Category } from "./Pages/index";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <HomePage />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/meal/:id" element = {<MealDetails />} />
        <Route path = "/meal/category/:name" element = {<Category />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
