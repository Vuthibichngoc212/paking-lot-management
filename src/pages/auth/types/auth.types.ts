export type LoginRequestBody = {
  password: string;
  email: string;
};
export type LoginRequest = {
  data: LoginRequestBody;
};

export type RegisterRequestBody = {
  fullName: string;
  password: string;
  email: string;
  retypePassword: string;
};
export type RegisterRequest = {
  data: RegisterRequestBody;
};
