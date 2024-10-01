import * as Yup from "yup";

export const userpakingSchema = Yup.object().shape({
  name: Yup.string().trim().required("Tên người dùng không được để trống"),
  licensePlate: Yup.string().trim().required("Biển số xe không được để trống"),
  parkingSlot: Yup.string().trim().required("Chỗ đỗ xe không được để trống"),
  checkInTime: Yup.string().trim().required("Giờ vào không được để trống"),
  status: Yup.string().trim().required("Trạng thái không được để trống"),
});
