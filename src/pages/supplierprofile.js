import { useEffect, useState , useRef } from 'react';
import Navbar from './navbar2';
import styles from "../styles/createorder.module.css"
import { getData } from '../../utils/localstorage';


export default function SPage() {
  const [supplierData , setSupplierData] = useState();
  
  
  const [one_supplier,setSupplierId]= useState('');
  const [suppliers, setSuppliers] = useState([]);
  const hasRun = useRef(false); 
    useEffect (() => {
      if (!hasRun.current){
      setSupplierData(getData("supplier"));

      console.log( "testssdewc"+ supplierData)
      if (supplierData){
        setSupplierId(supplierData[0].s_id)
        hasRun.current = true;
      
      }}
    

    }, [supplierData]);

    

    const selectedSupplier = suppliers.find(supplier => supplier.s_id === one_supplier);

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

    return(
      
   
        <div className={styles.gridd}>
      <div>
        <Navbar />
      </div>
    <div>
       <div className={styles.container}>


<div className={styles.upper}>
      <h1>Supplier &#62; View Supplier</h1>
      <hr className={styles.styled_hr}></hr>
        <br></br>
        {selectedSupplier ? (
        <label> <strong> Supplier Id :  {selectedSupplier.s_id}</strong></label>
      ) : (<label> <strong> Supplier Id :</strong></label>)}
       
        {/* <select onChange={(e) => setSupplierId(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {suppliers.map(supplier => (
             <option key={supplier.s_id} value={supplier.s_id}>{supplier.s_name}({supplier.s_id})</option>))}
          </select> */}
      {/* <input
        type="text"
        pattern="[a-zA-Z0-9]*$"
        placeholder="Supplier ID"
        value={s_id}
        onChange={(e) => setSupplierSid(e.target.value)}
      /> */}
           </div>

           {selectedSupplier ? (

           <div className={styles.lower}>

        <div className={styles.line}>

        
        <label>
            Name
          </label>
      <input
        type="text"
        placeholder="Supplier Name"
        value={selectedSupplier.s_name}
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
        value={selectedSupplier.s_no}
      /></div>

<br></br>

<div className={styles.line}>
  <label>
    Email
  </label>

      
      <input
        type="email"
        placeholder="Supplier Email"
        value={selectedSupplier.s_email}
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
        value={selectedSupplier.s_company_name}
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
        value={selectedSupplier.s_gst}
       
      />

      </div>

      {/* <input
        type="checkbox"
        checked={is_active}
        onChange={(e) => setSupplierIsActive(e.target.checked)}
      /> */}
      <br></br>
      {/* <button onClick={handleUpdate}>Add Supplier</button> */}
      {/* <button >Delete Supplier</button> */}

      </div>) : (<h2> Please select the Supplier</h2>)}
    </div>
    </div>
    
    </div>








    )





}
