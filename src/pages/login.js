import React from 'react';
import { useEffect, useState } from 'react';

import styles from '../styles/login.module.css';

import { useRouter } from 'next/router';

import { storeData , removeData, getData } from '../../utils/localstorage';








const Login = () => {



  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [table, setTableName] = useState('');


  

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const check = async (table1) => {
    
    try {
      console.log("In the check " + table1);
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username : userId,
          name : name,
          table : table1

        }),
      });
      
      const data = await response.json();

      removeData(data.message);
      storeData(data.message , data.data)
      console.log(getData(data.message));
      if (data.message == "user"){
        
        router.push('./activeorders');
        
      }
      else if (data.message == "supplier"){
        router.push('./supplierprofile');
      }
      else {
        alert (data.message);
        window.location.reload();

      }


    } catch (error) {
      alert("Inavalid username or password. Try Again");
      window.location.reload();
      router.push('./');
      
      console.error('Error in details :', error);
    }


  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    console.log('User ID:', userId);
    console.log('Name:', name);
    let table = "";

    if (userId.startsWith('U')) {
      // setTableName("users");
      table = "users";
      await check(table);
    }
    
    else if (userId.startsWith('S')){
      // setTableName("suppliers");
      table ="suppliers";
      console.log(table)
      await check(table);
    }
    else{
      alert("Invalid User ID :" + userId + " Try Again ")
      router.push('./');
    }

  };



  const router = useRouter();
  
  // const handleButtonClick = (e) => {
  //   e.preventDefault();
  //   handleSubmit(); 
  // };





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
