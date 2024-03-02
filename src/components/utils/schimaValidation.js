import * as Yup from "yup";

export const SCHEMA_EMAIL = Yup.string()
  .email("Enter correct email")
  .required();

export const SCHEMA_PASSWORD = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,36}$/,
    "Enter correct password"
  )
  .required();

export const SCHEMA_SIGN_IN = Yup.object({
    email: SCHEMA_EMAIL,
    password: SCHEMA_PASSWORD,
    passconfirm:Yup.string().oneOf([Yup.ref('password')], 'Pass not equel')
  });