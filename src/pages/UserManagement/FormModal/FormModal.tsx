/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CustomTextField from "../../../components/common/FormElements/CustomTextField/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import CRUDModal from "../../../components/common/Modal/CRUDModal/CRUDModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { userpakingSchema } from "../helpers/validation-schema.helpers";
import { CustomSelectField } from "../../../components/common/FormElements/CustomSelectField/CustomSelectField";

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
}: any) => {
  const methods = useForm({
    resolver: yupResolver(userpakingSchema),
    defaultValues: initialData || {},
  });

  const handleSubmitForm = () => {
    setIsOpenModal(false);
  };
  const optionsStatus = [
    { value: "1", label: "Đang đỗ" },
    { value: "2", label: "Đã thanh toán" },
  ];

  const mapStatusToValue = (status: string) => {
    switch (status) {
      case "Đang đỗ":
        return "1";
      case "Đã thanh toán":
        return "2";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (initialData) {
      const normalizedData = {
        ...initialData,
        status: mapStatusToValue(initialData.status),
      };

      methods.reset(normalizedData);
    }
  }, [initialData, methods]);

  return (
    <CRUDModal
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
      headerTitle={headerTitle}
      cancelButtonLabel={cancelButtonLabel}
      submitButtonLabel={submitButtonLabel}
      onSubmit={methods.handleSubmit(handleSubmitForm)}
    >
      <FormProvider {...methods}>
        <Box sx={{ width: "60rem" }}>
          <CustomTextField
            label="Tên người dùng"
            name="name"
            control={methods.control}
            required
          />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CustomTextField
                label="Biển số xe"
                name="licensePlate"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Chỗ đỗ xe"
                name="parkingSlot"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giờ vào"
                name="checkInTime"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelectField
                label="Trạng thái"
                name="status"
                options={optionsStatus}
                control={methods.control}
                required
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </CRUDModal>
  );
};

export default FormModal;
