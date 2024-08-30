import { useEffect, useState } from 'react';
import Navbar from './navbar2';
// import vieworder from "./vieworder";

import Link from 'next/link';

import styles from "../styles/activeO.module.css"




export default function ActiveOrders() {
    const [orders, setOrders] = useState([]);
    console.log(orders);
   


    useEffect(() => {
      const fetchData = async () => {
        try {
          const config = {
            method: "GET"
          }
          const response = await fetch('/api/ordersupplier', config); 
          
          const data = await response.json();
  
          setOrders(data);
          
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div className={styles.gridd}>
      <div>
        <Navbar />
      </div>


    <div className={styles.container}>
    <div className={styles.upper}>

<h1><strong> Order &#62; Active Orders </strong></h1>
{/* <hr className={styles.styled_hr}></hr>
<br></br>
<label> <strong> Order Number </strong> Generated at the End  </label> */}
{/* <input
  type="number"
  placeholder="Order ID"
  value={id}
  onChange={(e) => setOrderId(e.target.value)}
/> */}

</div>
    <div className={styles.table}>
    <div className={styles.tableHeadings}>
    <div className={styles.tableHeading}>Name </div>
    <div className={styles.tableHeading}>Order Number</div>
    <div className={styles.tableHeading}>Status</div>
    <div className={styles.tableHeading}>View</div>
    </div>
    <hr className={styles.hr}></hr>

  
    

  {orders.map(order => (
     <div key={order.order_id} className={styles.order}>

    <td>{order.ordername}</td>
    <td>{order.order_id}</td>
    <td>{order.status}</td>
    <button> View </button>
    <Link
  href={{
    pathname: './vieworder',
    query: "1"
  }}
></Link>


  </div>
  ))}


        
    </div>
    </div>

    </div>



  )
}


