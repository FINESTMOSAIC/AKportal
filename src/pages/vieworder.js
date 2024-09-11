import styles from "../styles/createorder.module.css"
import { useEffect, useState } from 'react';
import Navbar from './navbar';

import { useRouter } from 'next/router'


// for viewing specific order
export default function vieworder(){  
  const [orderId, getorderId] = useState(null);
  const [order, setOrders] = useState([]);
  const [status, setOrderStatus] = useState('');
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      const config =  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: orderId,
          status: status
        }),
      }
      console.log('Updating Status FUnction' + config )

      const response = await fetch('/api/order',config);

      const data = await response.json();

      
      alert(data.message)
      console.log(data.message); 
      router.back();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
  
  // getorderId(key);

  const updateStatus = (oi,new_Val) => {
    setOrders(x => x.map(St => St.order_id == oi ? {...St , status: new_Val } : St  ));
    setOrderStatus(new_Val);

  }

  
  
  
  
  useEffect(() => {
    
    // const { query } = router;

  
    if(!router.isReady) return;
    console.log(router.isReady);
    const q = router.query;
    const { key } = q;
    getorderId(key);
    
      console.log('orderId  ' + orderId);

      
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
          console.log(config);
        //   const response = await fetch(`/api/getorder?order_id=${orderId}`, config);
          const response = await fetch(`/api/getorder`, config);
          
          const data = await response.json();
  
          setOrders(data);
          
          
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
      if (orderId != null){
      fetchData();
    }
    }, [orderId]);

    return(



       

// seting a grid layout to seprate navbar 
       <div className={styles.gridd}>
        {/* importing navbar */}
      <div>
        <Navbar />
      </div>

<div className={styles.container}>
  {/* using map to create the data based on imput  */}

{...order.map(order => (
            <div key={order.order_id} className={styles.order}>
<div className={styles.upper}>

  <h1><strong> Order &#62; Place Order &#62;{order.order_id}</strong>  </h1>
  <hr className={styles.styled_hr}></hr>
  <br></br>
  <label> <strong> Order Number </strong>{order.order_id}  </label>
  
</div>
<div className={styles.lower}>

        <div className={styles.line}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Order Name"
            value={order.ordername}
          />

        </div>
        <br></br>

        <div className={styles.line}>
          <label>
            Supplier Id
          </label>
          <input
          type="text"
          pattern="[a-zA-Z0-9]*$"
          placeholder="Supplier ID"
          value={order.s_id}
        />

        </div>

        <br></br>

        <div className={styles.line3}>
          <label>
           Amount
          </label>
          <input
          type="Number"
          placeholder="Amount"
          value={order.order_details[0]}
          
        />

          <label style={{marginLeft:'20px'}}>
           Quantity
          </label>
          <input
          type="Number"
          placeholder="Quantity"
          value={order.order_details[2]}
         
        />
        </div>

        <br></br>

        <div className={styles.line}>
          <label>
            Status
          </label>
          {/* to change status  */}
          <select onChange={(e) => updateStatus( order.order_id ,e.target.value)} >
          <option disabled selected value> {order.status} </option>
          <option value="Pending">Pending</option>
          <option value="Awaiting_Pickup">Awaiting Pickup</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>

          </select>

          {/* <input
          type="text"
          placeholder="Order Status"
          value={order.status}
          onChange={(e) => updateStatus( order.order_id ,e.target.value)}
        /> */}

        </div>

        <br></br>

        <div className={styles.line}>
          <label>
            Description
          </label>
          <input
          type="text"
          placeholder="Order Description"
          value={order.order_details[1]}

        />
        </div>

        <br></br>

        <div className={styles.line3}>
          <label>
           Delivery Date
          </label>
          <input
          type="text"
          placeholder="Order Date"
          value={order.d_date}
        />

          <label style={{marginLeft:'20px'}}>
           Order Date
          </label>
          <input
          type="text"
          placeholder="Order Date"
          value={order.create_date}
        />
        </div>

        <br></br>



        {/* <input
          type="checkbox"
          checked={oreder.is_delay}
          onChange={(e) => setOrderIsDelay(e.target.checked)}
        /> */}
      



        {/* <input
          type="text"
          pattern="[a-zA-Z0-9]*$"
          placeholder="User ID"
          value={u_id}
          onChange={(e) => setOrderUid(e.target.value)}
        /> */}
        {/* <input
          type="date"
          placeholder="Order Date"
          value={createdate}
          onChange={(e) => setOrderCreatedate(e.target.value)}
        /> */}


{/* <button >Update Order</button> */}
<button onClick={handleUpdate}  >Update Order</button>
</div> 
    </div>
     ))}
     </div>
     </div>
    
  

    
       





      
      
      )

       

       
}