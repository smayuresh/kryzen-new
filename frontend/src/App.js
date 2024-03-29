import "./App.css";
import "./tabler.min.css";
import HomeNavbar from "./components/homenavbar";
import { Route, Routes } from "react-router-dom";
import Pricewatcher from "./components/pricewatcher";
import Broccoli from "./vegetables/broccoli/broccoli";
import Buyerconnect from "./components/buyerconnect";
import Nurseries from "./components/nurseries";
import Swisschard from "./vegetables/swisschard/swisschard";
import Kale from "./vegetables/kale/kale";
import Headernew from "./components/headernew";
import Navbarnew from "./components/navbarnew";
//import Weatherchart from "./components/weatherchart";
import Meteo from "./components/openmeteo";

function App() {
  return (
    <>
      <Meteo apiUrl="https://archive-api.open-meteo.com/v1/archive?latitude=18.5196&longitude=73.8554&start_date=2023-01-01&end_date=2024-01-01&daily=temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration&timezone=GMT" />
      {/*<Weatherchart apiUrl="{https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration&timezone=GMT&past_days=10}" />*/}
      <Headernew />
      <Navbarnew />

      <Routes>
        <Route path="/buyerconnect" element={<Buyerconnect />} />
        <Route path="/homenavbar" element={<HomeNavbar />} />
        <Route path="/pricewatcher" element={<Pricewatcher />} />
        <Route path="/nursuries" element={<Nurseries />} />
        <Route path="/broccoli" element={<Broccoli />} />
        <Route path="/swisschard" element={<Swisschard />} />
        <Route path="/kale" element={<Kale />} />
      </Routes>
    </>
  );
}

export default App;
