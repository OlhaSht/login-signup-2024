import React from 'react';
import LoginForm from './../components/forms/LoginForm/index';
import styles from "./Page.module.scss"

const SineUp = () => {
    return (
        <div className={styles.body}>
            <LoginForm />
        </div>
    );
}

export default SineUp;
