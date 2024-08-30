import { useEffect, useState } from 'react';

export default function SPage() {
    const [suppliers, setSuppliers] = useState([]);
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
        <div>
            <h1>
                supplier list
            </h1>
            <div className="suppliers-container">
                {suppliers.map(supplier => (
                    <div key={supplier.s_id} className="supplier">
                    <div><strong>supplier Name:</strong> {supplier.s_name}</div>
                    <div><strong>supplier No.:</strong> {supplier.s_no}</div>
                    <div><strong>supplier email:</strong> {supplier.s_email}</div>
                    <div><strong>supplier company:</strong> {supplier.s_company_name}</div>
                    <div><strong>supplier gst:</strong> {supplier.s_gst}</div>
                    <div><strong>supplier s_order:</strong> {supplier.s_order}</div>
                    </div> 
                ))}
            </div>
        </div>


    )





}
