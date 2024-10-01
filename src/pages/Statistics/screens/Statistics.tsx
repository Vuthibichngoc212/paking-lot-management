import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  const Statistics = () => {
    const rows = [
      {
        id: 1,
        user: "Nguyễn Văn A",
        booking: "30A-12345",
        parkingSpace: "Số 1",
        amount: 40000,
      },
      {
        id: 2,
        user: "Trần Thị B",
        booking: "29B-67890",
        parkingSpace: "Số 2",
        amount: 35000,
      },
      {
        id: 3,
        user: "Lê Văn C",
        booking: "31C-54321",
        parkingSpace: "Số 3",
        amount: 30000,
      },
    ];
  
    return (
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Thống Kê
        </Typography>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#E5F3FF" }}>
                <TableCell sx={{ color: "#223671", fontSize: "16px" }}>ID</TableCell>
                <TableCell sx={{ color: "#223671", fontSize: "16px" }}>User</TableCell>
                <TableCell sx={{ color: "#223671", fontSize: "16px" }}>Booking</TableCell>
                <TableCell sx={{ color: "#223671", fontSize: "16px" }}>Parking Space</TableCell>
                <TableCell sx={{ color: "#223671", fontSize: "16px" }}>Tiền (VND)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontSize: "14px" }}>{row.id}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.user}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.booking}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.parkingSpace}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default Statistics;
  