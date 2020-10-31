import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import L from 'leaflet';

import '../css/hellMap.css';

function HellMap() {
  const {
    state: { latitude, longitude },
  } = useLocation();

  useEffect(() => {
    const mymap = L.map('hellMap').setView([latitude, longitude], 16);
    L.tileLayer(
      'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=8cb8925d94954c96bf128dfc8d92ac76',
      {
        attribution:
          '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 22,
      }
    ).addTo(mymap);
    const hellIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 750,
    }).addTo(mymap);
    L.marker([latitude, longitude], { icon: hellIcon }).addTo(mymap);
  }, []);

  return (
    <div>
      <div id="hellMap" />
    </div>
  );
}

export default HellMap;
