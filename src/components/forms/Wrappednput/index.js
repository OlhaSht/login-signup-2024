import { ErrorMessage, Field } from "formik";
import React from "react";
import cx from "classnames";
import styles from "./WrappedInput.module.scss";

const Wrappednput = (props) => {
  const { name, ...rest } = props;
  return (
    <label className={styles.label}>
      {/* <span className={styles.span}>{name}:</span> */}
      <Field name={name}>
        {({ field, meta }) => {
          const inputStyles = cx(styles.input, {
            [styles.valid]: !meta.error && meta.touched,
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputStyles} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default Wrappednput;
