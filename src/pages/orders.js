import { useEffect, useState } from 'react';


export default function Opage(){
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

  return (
    
    <div>
      <h1>Orders List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.order_id}>
            Order: {order.ordername}, Date: {order.d_date}
          </li>
        ))}
      </ul>
      <br></br>
      <h1>Orders List</h1>
      <div className="orders-container">
        {orders.map(order => (
          <div key={order.order_id} className="order">
            <div><strong>Order Name:</strong> {order.ordername}</div>
            <div><strong>Order Date:</strong> {order.d_date}</div>
            <div><strong>Order Details:</strong> {order.order_details}</div>
          </div>
        ))}
      </div>


    </div>


    



  );
}