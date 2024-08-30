
// import First from "./first"
import Head from "next/head"
import { useEffect, useState } from 'react';

import styles from "../styles/home.module.css"

import Login from "./login";

// import handler from "api/orders"






// export default function Home({orders}){
//   console.log('Data in the component:', orders);

//   return (
//   <>
//   <Head>
//     <title>
//       First App
//     </title>
//   </Head>
//   <div>
//       <h1>orders List</h1>
//       <ul>
//         {orders.map((order) => (
//           <li key={order.order_id}>{order.ordername}</li>
//         ))}
//       </ul>
//     </div>


//   HELLO WORLD
//   {/* <First /> */}
//   <handler />
//   </>
//   )

// } 

export default function HomePage() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/order'); 
  //       const data = await response.json();

  //       console.log('Fetched data from API (Client-Side):', data); 

  //       data.forEach(order => order.order_id,order.d_date)
        
  //     } catch (error) {
  //       console.error('Error fetching data from API:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: "GET"
        }
        const response = await fetch('/api/order', config); 
        
        const data = await response.json();

        setOrders(data);
        
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  // return (
  //   <div>
  //     <h1>Orders List</h1>
  //     <ul>
  //       {orders.map(order => (
  //         <li key={order.order_id}>
  //           Order: {order.ordername}, Date: {order.d_date}
  //         </li>
  //       ))}
  //     </ul>
  //     <br></br>
  //     <h1>Orders List</h1>
  //     <div className="orders-container">
  //       {orders.map(order => (
  //         <div key={order.order_id} className="order">
  //           <div><strong>Order Name:</strong> {order.ordername}</div>
  //           <div><strong>Order Date:</strong> {order.d_date}</div>
  //           <div><strong>Order Details:</strong> {order.order_details}</div>
  //         </div>
  //       ))}
  //     </div>


  //   </div>


    



  // );



  return(
    <div className={styles.whole}>
      <div className={styles.nav}>
        <div><img src="../../logo_white.png"></img></div>
        <div  className={styles.navcontent}>
        <li><a href="#home">Link For Video</a></li>
  <li><a href="#news">Link for Git</a></li>
  <li><a href="#contact">Link for wireframe</a></li>

        </div>
    
  
  {/* <li><a href="#about">About</a></li> */}

      </div>
      <div className={styles.center}>
      

        

      

    <div className={styles.home}>
      
      <div className={styles.content}>
      <div className={styles.name}>
      <h1>
        AK Portal
      </h1>
      <h3>
      A Supplier Management and Order Tracking System
      </h3>

      </div>
      <div className={styles.about}>
        
      </div>
      </div>
      


      </div>



      <div className={styles.navimport}>
        <Login />

      </div>


    </div>


    <div className={styles.footer}>
      <h3>
      All rights reserved @FinestMosaic69 aka Agrim Kulshreshtha
      </h3>


    </div>



    </div>

  )
}
