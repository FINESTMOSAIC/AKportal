import React from 'react';
import { useEffect, useState } from 'react';

import styles from '../styles/login.module.css';
import ActiveOrders from './activeorders';
import { useRouter } from 'next/router';





const Login = () => {

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
  
    console.log('User ID:', userId);
    console.log('Name:', name);
    if (userId.startsWith('U')) {
      router.push('./activeorders');}
    
    else if (userId.startsWith('S')){
      router.push('./supplierprofile');

    }
    else{
      alert("Invalid User ID :" + userId + " Try Again ")
      router.push('./');
    }
 
    // Perform actions like API requests here
  };



  const router = useRouter();
  
  const handleButtonClick = (e) => {

    e.preventDefault();
    handleSubmit(); 


    
  };
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.screenContent}>
          <form className={styles.login}>
            <div className={styles.loginField}>
              <i className={`fas fa-user ${styles.loginIcon}`}></i>
              <input type="text" className={styles.loginInput} value={userId}
          onChange={handleUserIdChange} placeholder="User/Supplier Id" />
            </div>
            <div className={styles.loginField}>
              <i className={`fas fa-lock ${styles.loginIcon}`}></i>
              <input type="text" className={styles.loginInput} value={name}
          onChange={handleNameChange} placeholder="Name" />
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
