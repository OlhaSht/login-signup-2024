

import React from 'react';
import { Form, Formik, Field } from 'formik';
import Wrappednput from './../Wrappednput/index';
import styles from './LoginForm.module.scss'

const InitialValues = {email:"", password: "" };
const LoginForm = (props) => {
    const onSubmit = (values, formikbag) => {
        formikbag.resetForm();
    }
    return (
        <Formik 
            initialValues={InitialValues}
            onSubmit = {onSubmit}>
          {(formikProps,  FieldInputProps) => {
            return (
                <Form>
                     <h2 className={styles.h2}>CREATE AN ACCOUNT</h2>
                     <p>We always keep your name and email address private.</p>
                     <Wrappednput name ='fname' placeholder='First name'/>
                     <Wrappednput name ='lastname' placeholder='Last name'/>
                     <Wrappednput name ='displayname' placeholder='Display Name'/>
                     <Wrappednput name ='email' placeholder='Email Address'/>
                     <Wrappednput name ='password' placeholder='Password'/>
                     <Wrappednput name ='passwordconfirm' placeholder='Password Confirmation'/>
                     <label>
                        <Field type="radio" name="join" value="Byuer" />
                        Join As a Byuer
                    </label>
                    <label>
                        <Field type="radio" name="join" value="Seller" />
                        Join As a Creative or Marketplace Seller
                    </label>
                    <input type="submit" value="Create account" />
                </Form>
            )
          }}
        </Formik>
    );
}
export default LoginForm;
