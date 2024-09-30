import * as Yup from "yup";

export const pakingSchema = Yup.object().shape({
  name: Yup.string().trim().required("Tên bãi đỗ xe không được để trống"),
  address: Yup.string().trim().required("Địa chỉ không được để trống"),
  totalCapacity: Yup.number()
    .required("Tổng số chỗ đỗ xe không được để trống")
    .min(1, "Tổng số chỗ đỗ xe phải lớn hơn 0"),
  priceHourly: Yup.string()
    .trim()
    .required("Giá vé theo giờ không được để trống"),
  priceDaily: Yup.string()
    .trim()
    .required("Giá vé theo ngày không được để trống"),
  priceMonthly: Yup.string()
    .trim()
    .required("Giá vé theo tháng không được để trống"),
  openTime: Yup.string().trim().required("Giờ mở cửa không được để trống"),
  closeTime: Yup.string().trim().required("Giờ đóng cửa không được để trống"),
});
