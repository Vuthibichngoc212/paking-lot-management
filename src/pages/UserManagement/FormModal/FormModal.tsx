import React from "react";
import { Modal, Button, TextField, Box } from "@mui/material";

interface UserParking {
  name: string;
  licensePlate: string; 
  parkingSlot: string; 
  checkInTime: string; 
}

interface FormModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
  headerTitle: string;
  cancelButtonLabel: string;
  submitButtonLabel: string;
  initialData?: UserParking | null; 
}

const FormModal: React.FC<FormModalProps> = ({
  isOpenModal,
  setIsOpenModal,
  headerTitle,
  cancelButtonLabel,
  submitButtonLabel,
  initialData = null,
}) => {
  const handleSubmit = () => {
    console.log("Data saved", initialData);
    setIsOpenModal(false);
  };

  return (
    <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "8px",
        }}
      >
        <h2>{headerTitle}</h2>
        <TextField
          fullWidth
          label="Tên người dùng"
          defaultValue={initialData?.name || ""}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Biển số xe"
          defaultValue={initialData?.licensePlate || ""}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Chỗ đỗ xe"
          defaultValue={initialData?.parkingSlot || ""}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Giờ vào"
          defaultValue={initialData?.checkInTime || ""}
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={() => setIsOpenModal(false)}>{cancelButtonLabel}</Button>
          <Button onClick={handleSubmit} variant="contained">
            {submitButtonLabel}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FormModal;
