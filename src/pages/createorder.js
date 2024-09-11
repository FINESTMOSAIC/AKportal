import {useEffect , useState } from 'react';
import Navbar from './navbar';

import styles from "../styles/createorder.module.css"

// for adding order

export default function UpdateOrder() {
  const [id, setOrderId] = useState('0');
  const [name, setOrderName] = useState('');
  const [status, setOrderStatus] = useState('');
  const [order_details, setOrderDetails] = useState([]);
  const [ddate, setOrderDDate] = useState('');
  const [createdate, setOrderCreatedate] = useState('');
  const [is_delay, setOrderIsDelay] = useState(false);
  const [is_active, setOrderIsActive] = useState(true);
  const [s_id, setOrderSid] = useState('');
  const [u_id, setOrderUid] = useState('U123');
  const [getAmount , setAmount] = useState('');
  const [getquantity , setquantity] = useState('');
  const [getdesc , setdesc] = useState('');


  const [suppliers, setSuppliers] = useState([]);
  // const [one_supplier,setSupplierId]= useState('');
  useEffect(() => 
    {const fetchData = async () => {
    try {
        const config = {
            method: "GET"
        }
      const response = await fetch('/api/supplier', config); 
      const data = await response.json();

      setSuppliers(data);
    }
    catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
}, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: id,
          ordername: name,
          d_date: ddate,
          order_details: [getAmount,getdesc,getquantity],
          create_date: createdate,
          is_delay: is_delay,
          is_active: is_active,
          s_id: s_id,
          u_id: u_id,
          status: status
          // amount:getAmount,
          // quantity:getquantity,
          // descr:getdesc

        }),
      });

      const data = await response.json();
      alert(data.message)
      console.log(data.message); 
      window.location.reload();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    // seting a grid layout to seprate navbar 
    <div className={styles.gridd}>
      {/* importing navbar */}
      <div>
        <Navbar />
      </div>



    

    <div className={styles.container}>


      <div className={styles.upper}>

        <h1><strong> Order &#62; Place Order </strong></h1>
        <hr className={styles.styled_hr}></hr>
        <br></br>
        <label> <strong> Order Number </strong> Generated at the End  </label>
        {/* <input
          type="number"
          placeholder="Order ID"
          value={id}
          onChange={(e) => setOrderId(e.target.value)}
        /> */}
        
      </div>

      <div className={styles.lower}>

        <div className={styles.line}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Order Name"
            value={name}
            onChange={(e) => setOrderName(e.target.value)}
          />

        </div>

        <br></br>

        <div className={styles.line2}>
          <label>
            Supplier Id
          </label>
          <select onChange={(e) => setOrderSid(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {suppliers.map(supplier => (
             <option key={supplier.s_id} value={supplier.s_id}>{supplier.s_name}({supplier.s_id})</option>))}
          </select>
          <input
          type="text"
          pattern="[a-zA-Z0-9]*$"
          placeholder="Supplier ID"
          value={s_id} disabled

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
          onChange={(e) => setAmount(e.target.value)}
        />

          <label style={{marginLeft:'20px'}}>
           Quantity
          </label>
          <input
          type="Number"
          placeholder="Quantity"
          onChange={(e) => setquantity(e.target.value)}
        />
        </div>

        <br></br>

        <div className={styles.line}>
          <label>
            Status
          </label>
          <select onChange={(e) => setOrderStatus(e.target.value)} >
          <option disabled selected value> -- select an status -- </option>
          <option value="Pending">Pending</option>
          <option value="Awaiting_Pickup">Awaiting Pickup</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>
            </select>
          {/* <input
          type="text"
          placeholder="Order Status"
          value={status}
          onChange={(e) => setOrderStatus(e.target.value)}
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

          onChange={(e) => setdesc(e.target.value)}
        />
        </div>

        <br></br>

        <div className={styles.line3}>
          <label>
           Delivery Date
          </label>
          <input
          type="Date"
          placeholder="Order Date"
          value={ddate}
          onChange={(e) => setOrderDDate(e.target.value)}
        />

          <label style={{marginLeft:'20px'}}>
           Order Date
          </label>
          <input
          type="Date"
          placeholder="Order Date"
          value={createdate}
          onChange={(e) => setOrderCreatedate(e.target.value)}
        />
        </div>

        <br></br>



        {/* <input
          type="checkbox"
          checked={is_delay}
          onChange={(e) => setOrderIsDelay(e.target.checked)}
        /> */}
        {/* <input
          type="checkbox"
          checked={is_active}
          onChange={(e) => setOrderIsActive(e.target.checked)}
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


        <button onClick={handleUpdate}>Create Order</button>
      </div>
    </div>
    
    </div>
  );
}
