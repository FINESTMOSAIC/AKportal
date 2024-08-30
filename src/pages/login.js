import React from 'react';

import styles from '../styles/login.module.css';
import ActiveOrders from './activeorders';
import { useRouter } from 'next/router';


const Login = () => {
  const router = useRouter();
  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push('./activeorders');
  };
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.screenContent}>
          <form className={styles.login}>
            <div className={styles.loginField}>
              <i className={`fas fa-user ${styles.loginIcon}`}></i>
              <input type="text" className={styles.loginInput} placeholder="User/Supplier Id" />
            </div>
            <div className={styles.loginField}>
              <i className={`fas fa-lock ${styles.loginIcon}`}></i>
              <input type="text" className={styles.loginInput} placeholder="Name" />
            </div>
            <button onClick={handleButtonClick} className={`${styles.button} ${styles.loginSubmit}`}>
              <span className={styles.buttonText}>Log In Now</span>
              <i className={`fas fa-chevron-right ${styles.buttonIcon}`}></i>
            </button>
          </form>
         
        </div>
        <div className={styles.screenBackground}>
          <span className={`${styles.screenBackgroundShape} ${styles.screenBackgroundShape1}`}></span>
          <span className={`${styles.screenBackgroundShape} ${styles.screenBackgroundShape2}`}></span>
          <span className={`${styles.screenBackgroundShape} ${styles.screenBackgroundShape3}`}></span>
          <span className={`${styles.screenBackgroundShape} ${styles.screenBackgroundShape4}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
