/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormModal from "../components/FormModal/FormModal";
import HeaderTitle from "../../../components/layout/HeaderTitle/HeaderTitle";
import SearchInput from "../../../components/layout/SearchInput/SearchInput";

const BookedUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const rows = [
    {
      id: 1,
      name: "Bãi Đỗ Xe A",
      address: "123 Nguyễn Trãi, Hà Nội",
      totalCapacity: 100,
      priceHourly: "20,000 ",
      priceDaily: "100,000 ",
      priceMonthly: "2,000,000 ",
      openTime: "08:00",
      closeTime: "22:00",
    },
    {
      id: 2,
      name: "Bãi Đỗ Xe B",
      address: "456 Lê Duẩn, Đà Nẵng",
      totalCapacity: 150,
      priceHourly: "25,000 ",
      priceDaily: "150,000 ",
      priceMonthly: "2,500,000 ",
      openTime: "08:00",
      closeTime: "22:00",
    },
    {
      id: 3,
      name: "Bãi Đỗ Xe C",
      address: "789 Trần Phú, TP. HCM",
      totalCapacity: 80,
      priceHourly: "30,000 ",
      priceDaily: "200,000 ",
      priceMonthly: "3,000,000 ",
      openTime: "08:30",
      closeTime: "21:00",
    },
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm)
  );

  const handleEdit = (id: any) => {
    console.log(`Edit row with ID: ${id}`);
    const normalizedData = {
      ...id,
      totalCapacity: id.totalCapacity,
      priceHourly: id.priceHourly,
      priceDaily: id.priceDaily,
      priceMonthly: id.priceMonthly,
      openTime: id.openTime,
      closeTime: id.closeTime,
    };
    setSelectedData(normalizedData);
    setIsOpenModal(true);
  };

  const handleDelete = (id: any) => {
    console.log(`Delete row with ID: ${id}`);
  };

  return (
    <Box>
      <HeaderTitle
        title="Quản lý toàn bộ bãi đỗ"
        customStyles={{ marginBottom: "2.4rem" }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <SearchInput
          handleSearch={handleSearch}
          customStyles={{ width: "300px" }}
        />
        <Button
          variant="contained"
          size="medium"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedData(null);
            setIsOpenModal(true);
          }}
        >
          Thêm người dùng
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E5F3FF" }}>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
              >
                Tên bãi đỗ xe
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
              >
                Địa chỉ
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Tổng số chỗ đỗ xe
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Giá vé theo giờ
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Giá vé theo ngày
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Giá vé theo tháng
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Giờ mở cửa
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Giờ đóng cửa
              </TableCell>
              <TableCell
                sx={{
                  color: "#223671",
                  fontSize: "16px",
                  backgroundColor: "#E5F3FF",
                }}
                align="center"
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#F4FAFF",
                }}
              >
                <TableCell sx={{ fontSize: "14px" }}>{row.id}</TableCell>
                <TableCell sx={{ fontSize: "14px" }}>{row.name}</TableCell>
                <TableCell sx={{ fontSize: "14px" }}>{row.address}</TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.totalCapacity}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.priceHourly}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.priceDaily}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.priceMonthly}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.openTime}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.closeTime}
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{ minWidth: 0, padding: 0, marginRight: "5px" }}
                      onClick={() => handleEdit(row)}
                    >
                      <EditIcon color="primary" />
                    </Button>
                    <Button
                      sx={{ minWidth: 0, padding: 0 }}
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon color="error" />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <FormModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        headerTitle={selectedData ? "Chỉnh sửa bãi đỗ xe" : "Thêm bãi đỗ xe"}
        cancelButtonLabel="Hủy bỏ"
        submitButtonLabel={"Lưu"}
        initialData={selectedData}
      />
    </Box>
  );
};

export default BookedUser;
