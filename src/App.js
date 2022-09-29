import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import tt from '@tomtom-international/web-sdk-maps';

const App = () => {
  const mapElement = useRef();
  // eslint-disable-next-line
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504)

  // for india
  // const longitude = 78.8718;
  // const latitude = 21.7679;

  useEffect(() => {
    // console.log("aditya")
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_KEY,
      container: mapElement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true
      },
      zoom: 14
    });
    setMap(map);
    // eslint-disable-next-line
  }, [longitude, latitude])

  return (
    <div className="App">
      <div ref={mapElement} className="map"></div>
      <div className="searchBar">
        <h1>
          Where to?
        </h1>
        <input type="text"
          id='longitude'
          className='longitude'
          placeholder='put in longitude'
          onChange={(e) => { setLongitude(e.target.value) }}
        />
        <input type="text"
          id='latitude'
          className='latitude'
          placeholder='put in latitude'
          onChange={(e) => { setLatitude(e.target.value) }}
        />
      </div>
    </div>


  );
}

export default App;