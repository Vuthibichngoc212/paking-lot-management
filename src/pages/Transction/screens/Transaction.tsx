import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import HeaderTitle from "../../../components/layout/HeaderTitle/HeaderTitle";

interface TransactionData {
  id: number;
  customerName: string;
  amount: number;
  status: "Paid" | "Unpaid" | "Pending";
}

const Transaction = () => {
  // Dữ liệu giả lập cho bảng giao dịch
  const rows: TransactionData[] = [
    {
      id: 1,
      customerName: "Nguyễn Văn A",
      amount: 100000,
      status: "Paid",
    },
    {
      id: 2,
      customerName: "Trần Thị B",
      amount: 200000,
      status: "Unpaid",
    },
    {
      id: 3,
      customerName: "Lê Văn C",
      amount: 150000,
      status: "Pending",
    },
  ];

  const renderStatusChip = (status: string) => {
    const chipStyles = {
      minWidth: "100px",
      textAlign: "center",
    };

    switch (status) {
      case "Paid":
        return <Chip label="Đã thanh toán" color="success" sx={chipStyles} />;
      case "Unpaid":
        return <Chip label="Chưa thanh toán" color="error" sx={chipStyles} />;
      case "Pending":
        return <Chip label="Đang xử lý" color="warning" sx={chipStyles} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <HeaderTitle
        title="Giao dịch"
        customStyles={{ marginBottom: "2.4rem" }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E5F3FF" }}>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                }}
              >
                Tên khách hàng
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                }}
              >
                Số tiền (VND)
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                }}
              >
                Trạng thái
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ fontSize: "14px" }}>{row.id}</TableCell>
                <TableCell sx={{ fontSize: "14px" }}>
                  {row.customerName}
                </TableCell>
                <TableCell sx={{ fontSize: "14px" }}>
                  {row.amount.toLocaleString()}
                </TableCell>
                <TableCell sx={{ fontSize: "14px" }}>
                  {renderStatusChip(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transaction;
