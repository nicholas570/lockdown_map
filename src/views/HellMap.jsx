import { useLocation } from 'react-router-dom';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

function HellMap() {
  const {
    state: { latitude, longitude },
  } = useLocation();

  return (
    <div>
      <p>{latitude}</p>
      <p>{longitude}</p>
    </div>
  );
}

export default HellMap;
