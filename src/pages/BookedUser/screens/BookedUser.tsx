import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormModal from "../components/FormModal/FormModal";

const BookedUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Box>
      {" "}
      <Button
        variant="contained"
        size="medium"
        startIcon={<AddIcon />}
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        Thêm người dùng
      </Button>
      <FormModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        headerTitle={"Thêm người dùng"}
        cancelButtonLabel="Hủy bỏ"
        submitButtonLabel={"Lưu"}
      />
    </Box>
  );
};

export default BookedUser;
