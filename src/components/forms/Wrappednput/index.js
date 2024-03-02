import { ErrorMessage, Field } from 'formik';
import React from 'react';
import cx from 'classnames';
import styles from './WrappedInput.module.scss'

const Wrappednput = (props) => {
    const { name, ...rest } = props;
    return (
        <>
         <Field name={name}>
             {({ field, meta }) => {
          const inputStyles = cx(styles.input, {
            [styles.valid]: !meta.error,
            [styles.invalid]: meta.error,
          });
          return <input {...field} {...rest} className={inputStyles} />;
        }}
        </Field>
         <ErrorMessage name={name} component="div" className={styles.error} />
         </>
    );
}

export default Wrappednput;
