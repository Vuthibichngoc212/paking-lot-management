/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "../../../pages/HomePage/screens/HomePage.css";

const HomePage = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 21.0244246,
    longitude: 105.7938072,
    zoom: 16,
  });
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  );

  const mapboxToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

  const handleWheel = (event: any) => {
    event.preventDefault();
    const zoomAmount = event.deltaY < 0 ? 1 : -1;
    setViewport((prevViewport) => ({
      ...prevViewport,
      zoom: Math.max(1, Math.min(prevViewport.zoom + zoomAmount, 20)),
    }));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleMapStyleChange = (style: string) => {
    setMapStyle(style);
  };

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapStyle={mapStyle}
        onMove={(event) =>
          setViewport((prev) => ({
            ...prev,
            ...event.viewState,
          }))
        }
        mapboxAccessToken={mapboxToken}
        dragPan={true}
        scrollZoom={false}
      >
        <Marker latitude={21.0244246} longitude={105.7938072} anchor="bottom">
          <div className="marker" />
        </Marker>
      </ReactMapGL>

      {/* Thanh tìm kiếm */}
      <div className="search-box">
        <input type="text" placeholder="Tìm kiếm vị trí..." />
      </div>

      {/* Nút chọn chế độ hiển thị */}
      <div className="map-style-buttons">
        <button
          className="map-btn"
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/streets-v11")
          }
        >
          Streets
        </button>
        <button
          className="map-btn"
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/satellite-v9")
          }
        >
          Satellite
        </button>
        <button
          className="map-btn"
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/outdoors-v11")
          }
        >
          Hybrid
        </button>
      </div>
    </div>
  );
};

export default HomePage;
