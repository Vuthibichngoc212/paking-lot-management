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
  import FormModal from "../FormModal/FormModal";
  import DeletePopUp from "../../../components/layout/DeletePopUp/DeletePopUp";
  
  interface UserParking {
    id: number;
    name: string;
    licensePlate: string;
    parkingSlot: string; 
    checkInTime: string; 
    status: "Đang đỗ" | "Đã thanh toán"; 
  }
  
  const UserManagement = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedData, setSelectedData] = useState<UserParking | null>(null);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState<number | null>(null);
  
    const rows: UserParking[] = [
      {
        id: 1,
        name: "Nguyễn Văn A",
        licensePlate: "30A-12345",
        parkingSlot: "Số 1",
        checkInTime: "08:00",
        status: "Đang đỗ",
      },
      {
        id: 2,
        name: "Trần Thị B",
        licensePlate: "29B-67890",
        parkingSlot: "Số 2",
        checkInTime: "09:30",
        status: "Đã thanh toán",
      },
      {
        id: 3,
        name: "Lê Văn C",
        licensePlate: "31C-54321",
        parkingSlot: "Số 3",
        checkInTime: "07:45",
        status: "Đang đỗ",
      },
    ];
  
    const handleEdit = (user: UserParking) => {
      console.log(`Edit user with ID: ${user.id}`);
      setSelectedData(user);
      setIsOpenModal(true);
    };
  
    const handleDelete = (id: number) => {
      console.log(`Delete user with ID: ${id}`);
      setSelectedDeleteId(id);
      setIsDeletePopupOpen(true);
    };
  
    const handleConfirmDelete = () => {
      if (selectedDeleteId !== null) {
        console.log(`Deleting user with ID: ${selectedDeleteId}`);
        setIsDeletePopupOpen(false); 
      }
    };
  
    return (
      <Box>
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
          Thêm người dùng
        </Button>
  
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
                  Tên người dùng
                </TableCell>
                <TableCell
                  sx={{
                    color: "#223671",
                    fontSize: "16px",
                    backgroundColor: "#E5F3FF",
                  }}
                >
                  Biển số xe
                </TableCell>
                <TableCell
                  sx={{
                    color: "#223671",
                    fontSize: "16px",
                    backgroundColor: "#E5F3FF",
                  }}
                >
                  Chỗ đỗ xe
                </TableCell>
                <TableCell
                  sx={{
                    color: "#223671",
                    fontSize: "16px",
                    backgroundColor: "#E5F3FF",
                  }}
                  align="center"
                >
                  Giờ vào
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
                  <TableCell sx={{ fontSize: "14px" }}>{row.name}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.licensePlate}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>{row.parkingSlot}</TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    {row.checkInTime}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "14px" }}>
                    <Typography
                      sx={{
                        color: row.status === "Đang đỗ" ? "#00A03E" : "#DB2828",
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
          headerTitle={selectedData ? "Chỉnh sửa người dùng" : "Thêm người dùng"}
          cancelButtonLabel="Hủy bỏ"
          submitButtonLabel={"Lưu"}
          initialData={selectedData}
        />
  
        <DeletePopUp
          open={isDeletePopupOpen}
          onClose={() => setIsDeletePopupOpen(false)} 
          onConfirm={handleConfirmDelete} 
          title="Xác nhận xóa"
          content={`Bạn có chắc chắn muốn xóa người dùng có ID: ${selectedDeleteId}?`}
        />
      </Box>
    );
  };
  
  export default UserManagement;
  