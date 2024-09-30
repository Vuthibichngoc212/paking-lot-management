/* eslint-disable @typescript-eslint/no-explicit-any */
import CRUDModal from "../../../../components/common/Modal/CRUDModal/CRUDModal";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../../../../components/common/FormElements/CustomTextField/CustomTextField";
import { useEffect } from "react";
import { spaceZoneSchema } from "../helpers/validation-schema.helpers";
import { CustomSelectField } from "../../../../components/common/FormElements/CustomSelectField/CustomSelectField";

const FormModal = ({
  isOpenModal,
  setIsOpenModal,
  headerTitle,
  cancelButtonLabel,
  submitButtonLabel,
  initialData,
}: any) => {
  const methods = useForm({
    resolver: yupResolver(spaceZoneSchema),
    defaultValues: initialData || {},
  });

  const optionsStatus = [
    { value: "1", label: "Còn trống" },
    { value: "2", label: "Đã sử dụng" },
  ];

  const mapStatusToValue = (status: string) => {
    switch (status) {
      case "Còn trống":
        return "1";
      case "Đã sử dụng":
        return "2";
      default:
        return "";
    }
  };

  const handleSubmitForm = (data: any) => {
    console.log(data);
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CustomTextField
                label="Tên bãi đỗ xe"
                name="slot"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Địa chỉ"
                name="address"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giá vé"
                name="price"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giờ mở cửa"
                name="check_in"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giờ đóng cửa"
                name="check_out"
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
