import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Protected from "./Components/Basic/Protected";
import ProductDetail from './Components/Basic/ProductDetail';
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/home" element={<Protected Component={Home}/>}></Route>
        <Route path="/cart" element={<Protected Component={Cart}/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route
                path="/home/:productId"
                element={<Protected Component={ProductDetail} />}
              ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
