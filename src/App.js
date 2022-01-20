import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'reactstrap'
import Home from './homeAllComp/Home';
import Cat from './homeAllComp/cat';
import Footer from './homeAllComp/footer'
import Car from "./homeAllComp/carousel"
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [locationData, setLocationData] = useState([]);
  const [addressData, setaddressData] = useState("");
  const getMapData = async () => {
    let mapData = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/mapData", {
      params: {
        latitude: locationData[0],
        longitude: locationData[1]
      }
    });
    setaddressData(await mapData.data.plus_code.compound_code)
    console.log(addressData)
  }
  useEffect(() => {
    if (locationData.length > 0) {
      getMapData();
    }
  }, [locationData]);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    setLocationData([position.coords.latitude, position.coords.longitude]);
  }
  useEffect(() => {
    getLocation();
  }, [])

  return (
    <div className="App">
      <Home/>
      <Cat />
      <Car />
      {addressData}
      aruldass
      <Footer/>
    </div>
  );
}

export default App;
