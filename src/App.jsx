import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./home_screen/Header";
import WeatherLocations from "./components/WeatherLocation";
import HomeScreen from "./home_screen/HomeScreen";
import WeatherReport from "./components/WeatherReport";

function App() {

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route index element={<HomeScreen/>}/>
        <Route path="/search" element={<WeatherLocations/>}/>
        <Route path='/report/:id'/>
      </Routes>
    </Fragment>
  );
}

export default App;
