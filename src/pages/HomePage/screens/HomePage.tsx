/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import {
  Search,
  Clear,
  LocationOn,
  Business,
  Speed,
  Straighten,
} from "@mui/icons-material";

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
  const [cursorStyle, setCursorStyle] = useState("grab");

  const mapboxToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;

  const handleMapStyleChange = (style: string) => {
    setMapStyle(style);
  };

  const [searchValue, setSearchValue] = useState("");
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [showPaper, setShowPaper] = useState(false); // State to show/hide Paper

  const handleClear = () => {
    setSearchValue("");
    setCoordinates(null);
  };

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    if (searchValue.trim() === "") return;

    try {
      const response = await fetch(
        `${geocodingUrl}${encodeURIComponent(
          searchValue
        )}.json?access_token=${mapboxToken}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const place = data.features[0];
        setViewport((prevViewport) => ({
          ...prevViewport,
          latitude: place.center[1],
          longitude: place.center[0],
          zoom: 14,
        }));
        setCoordinates({
          latitude: place.center[1],
          longitude: place.center[0],
        });
      }
    } catch (error) {
      console.error("Error fetching location data: ", error);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleContributeClick = () => {
    setShowPaper((prev) => !prev);
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
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
        scrollZoom={true}
        style={{ cursor: cursorStyle }}
        onMouseEnter={() => setCursorStyle("pointer")}
        onMouseLeave={() => setCursorStyle("grab")}
      >
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          anchor="bottom"
        >
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: 10,
              height: 10,
            }}
          />
        </Marker>
      </ReactMapGL>

      {/* Search and Contribute Box */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {/* Search Box */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: "15%",
            transform: "translateX(-50%)",
            zIndex: 1,
            width: 350,
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Tìm kiếm vị trí..."
            fullWidth
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear}>
                    <Clear sx={{ fontSize: 20 }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { fontSize: 14 },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              height: 56, // Điều chỉnh chiều cao của TextField
            }}
          />
        </Box>

        {/* Contribute Button */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: "32%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: 56,
              borderRadius: "10px",
              fontSize: 14,
            }}
            onClick={handleContributeClick}
          >
            + Contribute
          </Button>
        </Box>
      </Box>

      {showPaper && (
        <Paper
          sx={{
            position: "absolute",
            top: 70,
            left: "40%",
            transform: "translateX(-50%)",
            zIndex: 1,
            padding: "30px 20px",
            width: "30%",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} sm={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton>
                  <LocationOn sx={{ color: "blue", fontSize: 40 }} />
                </IconButton>
                <Typography align="center" sx={{ fontSize: 14 }}>
                  Address
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton>
                  <Business sx={{ color: "green", fontSize: 40 }} />
                </IconButton>
                <Typography align="center" sx={{ fontSize: 14 }}>
                  Business
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton>
                  <Speed sx={{ color: "red", fontSize: 40 }} />
                </IconButton>
                <Typography align="center" sx={{ fontSize: 14 }}>
                  Speed Limit
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton>
                  <Straighten sx={{ color: "yellow", fontSize: 40 }} />
                </IconButton>
                <Typography align="center" sx={{ fontSize: 14 }}>
                  Clearance
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}

      {/* Coordinate display */}
      {coordinates && (
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            backgroundColor: "#fff",
            padding: "10px 15px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="body1">
            Tọa độ: {coordinates.latitude}, {coordinates.longitude}
          </Typography>
        </Box>
      )}

      {/* Map Style Buttons */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 1,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: 8,
            fontSize: 14,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#007aff",
              color: "#fff",
            },
          }}
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/streets-v11")
          }
        >
          Streets
        </Button>
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: 8,
            fontSize: 14,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#007aff",
              color: "#fff",
            },
          }}
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/satellite-v9")
          }
        >
          Satellite
        </Button>
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: 8,
            fontSize: 14,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#007aff",
              color: "#fff",
            },
          }}
          onClick={() =>
            handleMapStyleChange("mapbox://styles/mapbox/outdoors-v11")
          }
        >
          Hybrid
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
