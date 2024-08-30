import { useEffect, useState } from 'react';
import Navbar from './navbar';
import { useRouter } from 'next/router';
// import vieworder from "./vieworder";

import Link from 'next/link';

import styles from "../styles/activeO.module.css"




export default function ActiveOrders() {
    const [orders, setOrders] = useState([]);
    // const [selectedOrder, selectOr]
    const router = useRouter();

    const handleClick = (e) => {
      // console.log(e);
      const oder_id = e.target.parentElement.dataset.value;
      console.log(oder_id);
      const data ={ key : oder_id }

      router.push({
        pathname: '/vieworder',
        query: data,
      });

    }

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
     <div key={order.order_id} data-value={order.order_id} className={styles.order}>

    <td>{order.ordername}</td>
    <td>{order.order_id}</td>
    <td>{order.status}</td>
    <button onClick={handleClick}> View </button>
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


