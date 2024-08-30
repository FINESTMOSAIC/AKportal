import pool from '../../../utils/pdb';



async function getData(){
  const { rows } = await pool.query('SELECT * FROM orders'); 
  return rows
}

async function getData2(){
  const {rows} = await pool.query("SELECT * FROM public.orders where status != 'Completed'  AND s_id = $1 ", ['A12']);
  return rows
}

async function createData(req,res){
    const { order_id, ordername,d_date,order_details,create_date,is_delay,is_active,s_id,u_id,status} = req.body;
//     console.log("Order ID:", order_id);
// console.log("Order Name:", ordername);
// console.log("Delivery Date:", d_date);
// console.log("Order Details:", order_details);
// console.log("Creation Date:", create_date);
// console.log("Is Delay:", is_delay);
// console.log("Is Active:", is_active);
// console.log("Supplier ID:", s_id);
// console.log("User ID:", u_id);
// console.log("Status:", status);

    try {
        
        const { rowCount } = await pool.query('SELECT * FROM orders WHERE order_id = $1', [order_id]);
        if (rowCount > 0) {
            // If the order exists, update it
            await pool.query(
              'UPDATE orders SET status = $1  WHERE order_id = $2',
              [status, order_id]
            );
            return'Status updated successfully';
          } else {
            console.log("going in else")
            const result = await pool.query('SELECT COUNT(*) as rowCount FROM orders');
            const r= result.rows[0].rowCount;
            const o_id = result.rows[0].rowcount +1;
            

            console.log(o_id);
            // If the order does not exist, create a new one
            await pool.query(
              'INSERT INTO orders (order_id, ordername,d_date,order_details,create_date,is_delay,is_active,s_id,u_id,status) VALUES ($1, $2, $3 , $4 , $5 , $6 , $7 , $8, $9, $10)',
              [o_id, ordername,d_date,order_details,create_date,is_delay,is_active,s_id,u_id,status]
            );
           return 'Order created successfully and your order number is :' + o_id;
          }
     
        }

    catch (error) {
            console.error('Error processing request:', error);
            res.status(500).json({ message: 'Internal server ' });
          }
    
    
  
    }


export default async function handler(req, res) {
    try {
        switch (req.method) {

          case "GET":

            let rows = await getData2();
            res.status(200).json(rows);
            break;
            
          case "POST":

            
            
            let createResp = await createData(req,res);
            res.status(200).json({"message": createResp});
            break;

     
        
          default:
            break;
        }



      }
      catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }

