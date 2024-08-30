import styles from "../styles/createorder.module.css"
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'
// const router = useRouter();
// const data = router.query;

// console.log(data);


export default function vieworder(){  
    const [orderId, getorderId] = useState('51');
    const [order, setOrders] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                order_id: orderId})
          }
        //   const response = await fetch(`/api/getorder?order_id=${orderId}`, config);
          const response = await fetch(`/api/getorder`, config);
          
          const data = await response.json();
  
          setOrders(data);
          
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
  
      fetchData();
    }, []);

    return(
       <>
       <label> <strong> Order Number </strong> Generated at the End  </label>
        <input
          type="number"
          placeholder="Order ID"
        //   value={id}
          onChange={(e) => getorderId(e.target.value)}
/>

          {...order.map(order => (
            <div key={order.order_id} className={styles.order}>
       
           <td>{order.ordername}</td>
           <td>{order.order_id}</td>
           <td>{order.status}</td>
           <button> View </button>
       
         </div>
         ))}
       </>)
}