import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    // <div className="header">
    //  <Link to="/">
    //     <img
    //       className="header_logo"
    //       src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    //     />
    //   </Link>
      
   
    //   <div className="header_search">
    //     <input className="header_searchInput" type="text" />
    //   </div>
    //   <searchIcon className="header_searchIcon" />
    //   <div className="header_nav">
    //     <Link to={!user &&"/login"  }>
  
    //     <div onClick={handleAuthenticaton} className="header_option">
    //       <span className="header_optionLine1">Hello,{!user ? "guest" : user.email}</span>
    //       <span className="header_optionLine2"> {user ? "Sign Out" : "Sign In"}</span>
    //     </div>
    //     </Link>

<div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <SearchIcon className="header_searchIcon" />

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLine1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

<Link to="/orders">
        <div className="header_option">
          <span className="header_optionLine1">Returns</span>
          <span className="header_optionLine2">& Orders </span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLine1">your</span>
          <span className="header_optionLine2">Prime</span>
        </div>

      <Link to="/Checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span
              className="header_optionLine2
    header_basketCount"
            >
            {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
