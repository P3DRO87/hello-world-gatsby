import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";

const Header = ({ setHeaderH }) => {
   const headerRef = useRef();

   useEffect(() => {
      const setHeaderHeight = () => {
         headerRef.current?.offsetHeight && setHeaderH(headerRef.current?.offsetHeight);
      };

      setHeaderHeight();

      window.addEventListener("resize", setHeaderHeight);

      return () => window.removeEventListener("resize", setHeaderHeight);
   }, [headerRef]);

   return (
      <header ref={headerRef}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-auto">
                  <div className="main-title-container">
                     <h1 className="main-title">
                        <span>Simple</span> solutions
                     </h1>
                  </div>
               </div>
               <div className="col-sm-auto">
                  <nav className="header-nav">
                     <ul>
                        <li>
                           <Link activeClassName="active" to="/">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link activeClassName="active" to="/recipes">
                              Recipes
                           </Link>
                        </li>
                        <li>
                           <Link activeClassName="active" to="/tags">
                              Tags
                           </Link>
                        </li>
                        <li>
                           <Link activeClassName="active" to="/about">
                              About
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="col-sm-auto ms-auto">
                  <button className="header-contact-btn">Contact</button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
