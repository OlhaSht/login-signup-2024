import React from "react";
import { Form, Formik, Field } from "formik";
import Wrappednput from "./../Wrappednput/index";
import styles from "../Forms.module.scss";
import { SCHEMA_SIGN_IN } from './../../utils/schimaValidation';

const initialValues = { email: "", password: "", lastname: "",
fname: "", displayname: "", passwordconfirm: "" };
const LoginForm = (props) => {
  const onSubmit = (values, formikbag) => {
    formikbag.resetForm();
  };
  return (
    <div className={styles.container}>
      <Formik 
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_IN}
       onSubmit={onSubmit}>
        {(formikProps, FieldInputProps) => {
          return (
            <Form>
              <h2 className={styles.h2}>CREATE AN ACCOUNT</h2>
              <p>We always keep your name and email address private.</p>
              <div className={styles.inputlogin}>
                <div className={styles.formRow}>
                  <Wrappednput name="fname" placeholder="First name" />
                  <Wrappednput name="lastname" placeholder="Last name" />
                </div>
                <div className={styles.formRow}>
                  <Wrappednput name="displayname" placeholder="Display Name" />
                  <Wrappednput name="email" placeholder="Email Address" />
                </div>
                <div className={styles.formRow}>
                  <Wrappednput name="password" placeholder="Password" />
                  <Wrappednput name="passwordconfirm" placeholder="Password Confirmation"/>
                </div>
              </div>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <Field type="radio" name="join" value="Byuer" />Join As a Byuer</label>
              </div>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <Field type="radio" name="join" value="Seller" />Join As a Creative or Marketplace Seller</label>
              </div>
              <div className={styles.formRow}>
                <input className={styles.login}type="submit"value="Create account"/>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default LoginForm;
