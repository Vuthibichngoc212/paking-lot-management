/* eslint-disable @typescript-eslint/no-explicit-any */
import CRUDModal from "../../../../components/common/Modal/CRUDModal/CRUDModal";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import FormikTextField from "../../../../components/common/FormElements/FormikTextField/FormikTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { usersSchema } from "../../../auth/helpers/validation-schema.helpers";
import { Form, Formik } from "formik";
import { IUserData } from "../../../../interfaces/users";

const FormModal = ({
  isOpenModal,
  setIsOpenModal,
  headerTitle,
  cancelButtonLabel,
  submitButtonLabel,
}: any) => {
  const methods = useForm({
    resolver: yupResolver(usersSchema),
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

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
          <Formik
            initialValues={{
              role: "",
              fullName: "",
              licensePlate: "",
              parkingSlot: "",
            }}
            validationSchema={usersSchema}
            onSubmit={(values: IUserData) => {
              console.log(values);
            }}
          >
            {({ values, setFieldValue, handleBlur }) => (
              <Form>
                <Grid container>
                  <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="fullName"
                      topLabel="Họ tên"
                      name="fullName"
                      placeholder="Nhập họ tên"
                      onBlur={(e: any) => {
                        handleBlur(e);
                        if (values.fullName) {
                          setFieldValue(
                            "fullName",
                            values.fullName.trim(),
                            true
                          );
                        }
                      }}
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="licensePlate"
                      topLabel="Biển số xe"
                      name="licensePlate"
                      placeholder="Nhập biển số xe"
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="parkingSlot"
                      topLabel="Khu vực đỗ xe"
                      name="parkingSlot"
                      placeholder="Khu vực đỗ xe"
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="arrivalTime"
                      topLabel="Thời gian đến"
                      name="arrivalTime"
                      placeholder="Nhập thời gian đến"
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="departureTime"
                      topLabel="Thời gian đi"
                      name="departureTime"
                      placeholder="Nhập thời gian đi"
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid>
                  {/* <Grid item xs={6}>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="status"
                      topLabel="Trạng thái"
                      name="status"
                      placeholder="Nhập trạng thái"
                      sx={{ marginBottom: "2.4rem" }}
                    />
                  </Grid> */}
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </FormProvider>
    </CRUDModal>
  );
};

export default FormModal;
