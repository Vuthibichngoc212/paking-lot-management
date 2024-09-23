export interface IUser {
  id?: number;
  role: string;
  fullName?: string;
  email: string;
  password: string;
}
export interface IUserData {
  id?: number;
  role: string;
  fullName?: string | undefined;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: number;
  licensePlate?: string;
  parkingSlot?: string;
  payment_method?: string;
  created_at?: Date;
  updated_at?: Date;
}
