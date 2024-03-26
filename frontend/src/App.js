import "./App.css";

import HomeNavbar from "./components/homenavbar";
import { Route, Routes } from "react-router-dom";
import Pricewatcher from "./components/pricewatcher";
import Header from "./components/header";
/*import Table from "./components/table";*/

import Broccoli from "./vegetables/broccoli/broccoli";

import Navbar from "./components/navbar";
import Buyerconnect from "./components/buyerconnect";

import Nurseries from "./components/nurseries";
import Swisschard from "./vegetables/swisschard/swisschard";
import Kale from "./vegetables/kale/kale";
/*import MeteoChart from "./components/meteochart";*/

function App() {
  return (
    <>
      {/*<MeteoChart/>*/}

      <Header />
      {/*<div>
{Datadata.map((e) => {
          return <Table productname={e.productname} 
          title={e.title} 
          email={e.email}
          role={e.role}/>;
        })}
      </div>*/}
      <Navbar />
      <Routes>
        <Route path="/buyerconnect" element={<Buyerconnect />} />
        <Route path="/homenavbar" element={<HomeNavbar />} />
        <Route path="/pricewatcher" element={<Pricewatcher />} />
        <Route path="/nursuries" element={<Nurseries />} />
        <Route path="/broccoli" element={<Broccoli />} />
        <Route path="/swisschard" element={<Swisschard/>} />
        <Route path="/kale" element={<Kale/>}/>
      </Routes>
    </>
  );
}

export default App;
