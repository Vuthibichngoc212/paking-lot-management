import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventIcon from "@mui/icons-material/Event";

const Dashboard = () => {
  const stats = {
    users: 3,
    bookings: 3,
    parkingSpaces: 5,
    todayIncome: "2,000,000 VND",
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PeopleIcon sx={{ fontSize: 40, color: "#ff6347" }} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h6">Users</Typography>
                  <Typography variant="h4">{stats.users}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EventIcon sx={{ fontSize: 40, color: "#87CEEB" }} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h6">Bookings</Typography>
                  <Typography variant="h4">{stats.bookings}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <DirectionsCarIcon sx={{ fontSize: 40, color: "#32CD32" }} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h6">Parking Spaces</Typography>
                  <Typography variant="h4">{stats.parkingSpaces}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MonetizationOnIcon sx={{ fontSize: 40, color: "#FFD700" }} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h6">Today Income</Typography>
                  <Typography variant="h4">{stats.todayIncome}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
