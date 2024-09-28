// MapContainer.tsx
import React from 'react';
import GoogleMapReact from 'google-map-react';

interface IMarkerProps {
  text: string;
}

const Marker: React.FC<IMarkerProps> = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>{text}</div>
);

const MapContainer: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 21.028511, // Your latitude
      lng: 105.804817, // Your longitude
    },
    zoom: 14,
  };

  return (
    <div style={{ height: '700px', width: '1500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }} // Replace with your actual API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={21.028511} lng={105.804817} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
