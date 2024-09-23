/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Divider } from "@mui/material";
import { useStyles } from "./CRUDModal.styles";
import CloseIcon from "@mui/icons-material/Close";
import HeaderTitle from "../../../layout/HeaderTitle/HeaderTitle";
interface ModalProps {
  isOpenModal: boolean;
  setIsOpenModal: any;
  headerTitle: string;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
  className?: string;
}
const CRUDModal = ({
  isOpenModal,
  setIsOpenModal,
  headerTitle,
  cancelButtonLabel,
  submitButtonLabel,
  onSubmit,
  children,
  ...props
}: ModalProps) => {
  const handleClose = () => setIsOpenModal(false);
  const classes = useStyles();

  return (
    <Modal
      open={isOpenModal}
      onClose={handleClose}
      {...props}
      className={classes.root}
    >
      <Box className={classes.boxWrapper}>
        <Box sx={{ display: "grid" }}>
          <HeaderTitle
            title={headerTitle}
            customStyles={{
              "& .MuiTypography-root": { color: "#000" },
              textAlign: "center",
              marginBottom: "1.6rem",
              gridColumn: "2/3",
            }}
            variant="title3"
          />
          <Box sx={{ gridColumn: "3", textAlign: "end" }}>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
        <Divider sx={{ mb: "1.6rem" }} />

        <Box>
          <Box>{children}</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: "2.4rem",
              gap: "1.6rem",
            }}
          >
            <Button variant="outlined" size="medium" onClick={handleClose}>
              {cancelButtonLabel}
            </Button>
            <Button variant="contained" size="medium" onClick={onSubmit}>
              {submitButtonLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CRUDModal;
