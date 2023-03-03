import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
   const [headerH, setHeaderH] = useState(0);
   const [footerH, setFooterH] = useState(0);

   console.log(headerH);

   return (
      <>
         <Header setHeaderH={setHeaderH} />
         <main
            style={{ minHeight: `calc(100vh - ${headerH + footerH}px)` }}
            className="main-content"
         >
            {children}
         </main>
         <Footer setFooterH={setFooterH} />
      </>
   );
};

export default Layout;
