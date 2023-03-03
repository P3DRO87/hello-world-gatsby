import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import Layout from "../components/Layout";

export default function Home() {
   return (
      <>
         <Layout>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-sm-auto">
                     <h2 className="section-title">Home page</h2>
                  </div>
               </div>
            </div>
         </Layout>
      </>
   );
}
