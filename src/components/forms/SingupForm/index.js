import React from "react";
import { Form, Formik } from "formik";
import Wrappednput from "./../Wrappednput/index";
import { SCHEMA_SIGN_IN } from "./../../utils/schimaValidation";
import styles from "../Forms.module.scss";

const InitialValues = { email: "", password: "" };
const SingupForm = (props) => {
  const onSubmit = (values, formikbag) => {
    formikbag.resetForm();
  };
  return (
    <Formik
      initialValues={InitialValues}
      schimaValidation={SCHEMA_SIGN_IN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className={styles.formlogin}>
              <h2 className={styles.h2}>LOGIN TO YOUR ACCOUNT</h2>
              <div className={styles.formRow}>
                <Wrappednput className={styles.inputlogin} name="email" placeholder="Email address" />
              </div>
              <div className={styles.formRow}>
                <Wrappednput className={styles.inputlogin} name="password" placeholder="Password"/>
              </div>
              <input className={styles.login} type="submit" value="LOGIN" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SingupForm;
