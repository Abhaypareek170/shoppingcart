import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">STORE</span>
      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
        <span className="cartCount">
          <button onClick={logoutHandler}>Logout</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
