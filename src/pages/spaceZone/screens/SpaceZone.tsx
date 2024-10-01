/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import FormModal from "../components/FormModal/FormModal";
import DeletePopUp from "../../../components/layout/DeletePopUp/DeletePopUp";
import HeaderTitle from "../../../components/layout/HeaderTitle/HeaderTitle";
import SearchInput from "../../../components/layout/SearchInput/SearchInput";

const SpaceZone = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [selectedDeleteId, setSelectedDeleteId] = useState<number | null>(null);
  const rows = [
    {
      id: 1,
      slot: "Số 1",
      address: "123 Nguyễn Trãi, Hà Nội",
      check_in: "08:15",
      check_out: "10:30",
      price: "40,000",
      status: "Đã sử dụng",
    },
    {
      id: 2,
      slot: "Số 2",
      address: "123 Nguyễn Trãi, Hà Nội",
      check_out: null,
      price: null,
      status: "Còn trống",
    },
    {
      id: 3,
      slot: "Số 3",
      address: "123 Nguyễn Trãi, Hà Nội",
      check_in: "07:30",
      check_out: "09:15",
      price: "35,000",
      status: "Đã sử dụng",
    },
    {
      id: 4,
      slot: "Số 4",
      address: "123 Nguyễn Trãi, Hà Nội",
      check_in: null,
      check_out: null,
      price: null,
      status: "Còn trống",
    },
    {
      id: 5,
      slot: "Số 5",
      address: "123 Nguyễn Trãi, Hà Nội",
      check_in: "08:45",
      check_out: "10:00",
      price: "30,000",
      status: "Đã sử dụng",
    },
  ];

  const handleEdit = (id: any) => {
    console.log(id);
    console.log(`Edit row with ID: ${id}`);
    const normalizedData = {
      ...id,
      price: id.price,
      check_in: id.check_in,
      check_out: id.check_out,
      status: id.status,
    };
    setSelectedData(normalizedData);
    setIsOpenModal(true);
  };

  const handleDelete = (id: any) => {
    console.log(`Delete row with ID: ${id}`);
    setSelectedDeleteId(id);
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting row with ID: ${selectedDeleteId}`);
    setIsDeletePopupOpen(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <Box>
      <HeaderTitle
        title="Quản lý bãi đỗ"
        customStyles={{ marginBottom: "2.4rem" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
          sx={{ marginBottom: "20px" }}
        >
          Thêm bãi đỗ
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
                Chỗ để xe
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
                Trạng thái
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
            {rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#F4FAFF",
                }}
              >
                <TableCell sx={{ fontSize: "14px" }}>{row.id}</TableCell>
                <TableCell sx={{ fontSize: "14px" }}>{row.slot}</TableCell>
                <TableCell sx={{ fontSize: "14px" }}>{row.address}</TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.price}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.check_in}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  {row.check_out}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "14px" }}>
                  <Typography
                    sx={{
                      color:
                        row.status === "Đã sử dụng" ? "#DB2828" : "#00A03E",
                    }}
                    variant="body2"
                  >
                    {row.status}
                  </Typography>
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

      <DeletePopUp
        open={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)} // Đóng popup khi bấm "Hủy"
        onConfirm={handleConfirmDelete} // Xác nhận xóa khi bấm "Xác nhận"
        title="Xác nhận xóa"
        content={`Bạn có chắc chắn muốn xóa bãi đỗ xe có ID: ${selectedDeleteId}?`}
      />
    </Box>
  );
};

export default SpaceZone;
