import React from 'react';
import SingupForm from './../components/forms/SingupForm/index';
import styles from "./Page.module.scss"

const Login = () => {
    return (
        <div className={styles.body}>
            <SingupForm />
        </div>
    );
}

export default Login;
