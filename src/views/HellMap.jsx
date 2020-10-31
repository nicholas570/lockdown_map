import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { MapContainer, TileLayer } from 'react-leaflet';

import '../css/hellMap.css';

// TileLayer, Marker, Popup
import L from 'leaflet';

function HellMap() {
  const {
    state: { latitude, longitude },
  } = useLocation();

  useEffect(() => {
    const mymap = L.map('mapid').setView([latitude, longitude], 16);
    L.tileLayer(
      'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=8cb8925d94954c96bf128dfc8d92ac76',
      {
        attribution:
          '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 22,
      }
    ).addTo(mymap);
  }, []);

  return (
    <div>
      <div id="mapid" />

      <p>{latitude}</p>
      <p>{longitude}</p>
    </div>
  );
}

export default HellMap;
