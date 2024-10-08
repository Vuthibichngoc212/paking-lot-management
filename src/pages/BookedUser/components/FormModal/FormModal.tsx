/* eslint-disable @typescript-eslint/no-explicit-any */
import CRUDModal from "../../../../components/common/Modal/CRUDModal/CRUDModal";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../../../../components/common/FormElements/CustomTextField/CustomTextField";
import { useEffect } from "react";
import { pakingSchema } from "../helpers/validation-schema.helpers";

const FormModal = ({
  isOpenModal,
  setIsOpenModal,
  headerTitle,
  cancelButtonLabel,
  submitButtonLabel,
  initialData,
}: any) => {
  const methods = useForm({
    resolver: yupResolver(pakingSchema),
    defaultValues: initialData || {},
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (initialData) {
      console.log(initialData);
      methods.reset(initialData);
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
                name="name"
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
                label="Tổng số chỗ đỗ"
                name="totalCapacity"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giá vé theo giờ"
                name="priceHourly"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giá vé theo ngày"
                name="priceDaily"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giá vé theo tháng"
                name="priceMonthly"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giờ mở cửa"
                name="openTime"
                control={methods.control}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Giờ đóng cửa"
                name="closeTime"
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
