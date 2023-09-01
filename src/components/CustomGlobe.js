import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import HEX_DATA from "./Data/countries_hex_data.json";
import Globe from "react-globe.gl";




export default function CustomGlobe(props) {
  const globeEl = useRef();
  

  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    let countryLocation;
    if(props.data){
       countryLocation = {
        lat: props.data.coord.lat,
        lng: props.data.coord.lon,
        altitude: 1.5
      };
    }else{
       countryLocation = {
        lat: "28.6667",
        lng: "77.2167",
        altitude: 1.5
      };
    }
    
    globeEl.current.pointOfView(countryLocation, 0);
  }, [props]);

  return (
    <>
    <Globe
      
      ref={globeEl}
      
      labelsData={props.data && ([{
        lat: props.data.coord.lat,
        lng: props.data.coord.lon,
        label: props.data.name
      }])}
      labelText={"label"}
      labelSize={1.6}
      labelColor={useCallback(() => "white", [])}
      labelDotRadius={0.4}
      labelAltitude={0.05}
      hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(() => "#1b66b1", [])}
    />
    </>
  );
}
