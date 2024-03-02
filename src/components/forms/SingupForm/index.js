import React from 'react';
import { Form, Formik } from 'formik';
import Wrappednput from './../Wrappednput/index';
import { SCHEMA_SIGN_IN } from './../../utils/schimaValidation';
import styles from './Signup.module.scss'

const InitialValues = {email:"", password: "" };
const SingupForm = (props) => {
    const onSubmit = (values, formikbag) => {
        formikbag.resetForm();
    }
    return (
        <Formik 
            initialValues={InitialValues}
            schimaValidation={SCHEMA_SIGN_IN} 
            onSubmit = {onSubmit}>
          {(formikProps) => {
            return (
                <Form>
                     <h2  className={styles.h2}>LOGIN TO YOUR ACCOUNT</h2>
                     <Wrappednput name ='email' placeholder='Email address'/>
                     <Wrappednput name ='password' placeholder='Password'/>
                     <input type="submit" value="LOGIN" />
                </Form>
            )
          }}
        </Formik>
    );
}

export default SingupForm;
