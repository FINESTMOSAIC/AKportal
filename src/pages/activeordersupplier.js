import { useEffect, useState, useRef } from 'react';
import Navbar from './navbar2';
import { useRouter } from 'next/router';

import styles from "../styles/activeO.module.css";
import { getData } from '../../utils/localstorage';

export default function ActiveOrders() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const handleClick = (e) => {
    const order_id = e.target.parentElement.dataset.value;
    console.log(order_id);
    const data = { key: order_id };

    router.push({
      pathname: '/vieworderSuppliers',
      query: data,
    });
  };

  console.log(orders);

  const [supplierData, setSupplierData] = useState();
  const [one_supplier, setSupplierId] = useState('');

  const hasRun = useRef(false);
  useEffect(() => {
    if (!hasRun.current) {
      setSupplierData(getData("supplier"));

      if (supplierData) {
        setSupplierId(supplierData[0].s_id);
        hasRun.current = true;
      }
    }
  }, [supplierData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            s_id: one_supplier
          })
        };
        const response = await fetch('/api/ordersupplier', config);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, [one_supplier]);

  return (
    <div className={styles.gridd}>
      <div>
        <Navbar />
      </div>

      <div className={styles.container}>
        <div className={styles.upper}>
          <h1><strong> Order &#62; Active Orders </strong></h1>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeadings}>
            <div className={styles.tableHeading}>Name</div>
            <div className={styles.tableHeading}>Order Number</div>
            <div className={styles.tableHeading}>Status</div>
            <div className={styles.tableHeading}>View</div>
          </div>
          <hr className={styles.hr}></hr>

          {orders && orders.length > 0 ? (
            orders.map(order => (
              <div key={order.order_id} data-value={order.order_id} className={styles.order}>
                <div>{order.ordername}</div>
                <div>{order.order_id}</div>
                <div>{order.status}</div>
                <button onClick={handleClick}>View</button>
              </div>
            ))
          ) : (
            <h2>No Orders yet</h2>
          )}
        </div>
      </div>
    </div>
  );
}
