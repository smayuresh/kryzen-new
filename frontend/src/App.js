import "./App.css";

import HomeNavbar from "./components/homenavbar";
import { Route, Routes } from "react-router-dom";
import Pricewatcher from "./components/pricewatcher";
import Header from "./components/header";
/*import Table from "./components/table";*/

import Broccoli from "./vegetables/broccoli";
import Welcome from "./welcome";
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

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homenavbar" element={<HomeNavbar />} />
        <Route path="/pricewatcher" element={<Pricewatcher />} />
        <Route path="/broccoli" element={<Broccoli />} />
      </Routes>
    </>
  );
}

export default App;
