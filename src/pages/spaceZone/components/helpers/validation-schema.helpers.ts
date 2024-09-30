import * as Yup from "yup";

export const spaceZoneSchema = Yup.object().shape({
  name: Yup.string().trim().required("Tên bãi đỗ xe không được để trống"),
  address: Yup.string().trim().required("Địa chỉ không được để trống"),
  price: Yup.string().trim().required("Giá vé không được để trống"),
  openTime: Yup.string().trim().required("Giờ mở cửa không được để trống"),
  closeTime: Yup.string().trim().required("Giờ đóng cửa không được để trống"),
  status: Yup.string().trim().required("Trạng thái không được để trống"),
});
