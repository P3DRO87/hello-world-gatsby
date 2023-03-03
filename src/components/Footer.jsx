import React, { useEffect, useRef } from "react";

const Footer = ({ setFooterH }) => {
   const footerRef = useRef();

   useEffect(() => {
      const setFooterHeight = () => {
         footerRef.current?.offsetHeight && setFooterH(footerRef.current?.offsetHeight);
      };

      setFooterHeight();

      window.addEventListener("resize", setFooterHeight);

      return () => window.removeEventListener("resize", setFooterHeight);
   }, [footerRef]);

   return (
      <footer ref={footerRef}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-sm-auto">
                  <p className="mb-0">
                     @{new Date().getFullYear()} <span>Simple solutions</span>. Built with
                     <span> Gatsby</span>
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
