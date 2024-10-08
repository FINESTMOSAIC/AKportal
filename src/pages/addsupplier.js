import { useState } from 'react';
import Navbar from './navbar';
import styles from "../styles/createorder.module.css"

export default function AddSupplier() {
  const [s_id, setSupplierSid] = useState('0');
  const [s_name, setSupplierName] = useState('');
  const [s_no, setSupplierNo] = useState('');
  const [s_email, setSupplierEmail] = useState('');
  const [s_company_name, setSupplierCompanyName] = useState('');
  const [s_gst, setSupplierGst] = useState('');
  const [is_active, setSupplierIsActive] = useState(true);

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/supplier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          s_id:s_id,
          s_name:s_name,
          s_no:s_no,
          s_email:s_email,
          s_company_name:s_company_name,
          s_gst:s_gst,
          is_active:is_active
        }),
      });

      const data = await response.json();
      alert(data.message)
      console.log(data.message); // Log the success message or handle it accordingly
      window.location.reload();
    } catch (error) {
      console.error('Error updating supplier:', error);
    }
  };

  return (
    <div className={styles.gridd}>
      <div>
        <Navbar />
      </div>
    <div>
       <div className={styles.container}>


<div className={styles.upper}>
      <h1>Supplier &#62; Add Supplier</h1>
      <hr className={styles.styled_hr}></hr>
        <br></br>
        <label> <strong> Supplier Id </strong> :Generated at the End  </label>
      {/* <input
        type="text"
        pattern="[a-zA-Z0-9]*$"
        placeholder="Supplier ID"
        value={s_id}
        onChange={(e) => setSupplierSid(e.target.value)}
      /> */}
           </div>

           <div className={styles.lower}>

        <div className={styles.line}>

        
        <label>
            Name
          </label>
      <input
        type="text"
        placeholder="Supplier Name"
        value={s_name}
        onChange={(e) => setSupplierName(e.target.value)}
      />
      </div>

      <br></br>

        <div className={styles.line}>
          <label>
            Number
          </label>


      <input
        type="text"
        placeholder="Supplier Number"
        value={s_no}
        onChange={(e) => setSupplierNo(e.target.value)}
      /></div>

<br></br>

<div className={styles.line}>
  <label>
    Email
  </label>

      
      <input
        type="email"
        placeholder="Supplier Email"
        value={s_email}
        onChange={(e) => setSupplierEmail(e.target.value)}
      />
      </div>


      <br></br>

<div className={styles.line}>
  <label>
    Company Name
  </label>


      <input
        type="text"
        placeholder="Supplier Company Name"
        value={s_company_name}
        onChange={(e) => setSupplierCompanyName(e.target.value)}
      />
      </div>

      <br></br>

<div className={styles.line}>
  <label>
    GST Number
  </label>


      <input
        type="text"
        pattern="[a-zA-Z0-9]*$"
        placeholder="Supplier GST"
        value={s_gst}
        onChange={(e) => setSupplierGst(e.target.value)}
      />

      </div>

      {/* <input
        type="checkbox"
        checked={is_active}
        onChange={(e) => setSupplierIsActive(e.target.checked)}
      /> */}
      <br></br>
      <button onClick={handleUpdate}>Add Supplier</button>
      </div>
    </div>
    </div>
    
    </div>
  );
}
