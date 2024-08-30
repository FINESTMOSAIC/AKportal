import pool from '../../../utils/pdb';

async function getData(){
  const { rows } = await pool.query('SELECT * FROM suppliers');  
  return rows
}

async function createData( req , res ){
  const {s_id , s_name , s_no , s_email , s_company_name , s_gst , is_active } =req.body;

  try{
    // const { rowCount } = await pool.query('SELECT * FROM orders WHERE s_id = $1', [s_id]);
    const result = await pool.query('SELECT COUNT(*) as rowCount FROM suppliers');
            const r= result.rows[0].rowCount;
            const sup_id = 'S'+ result.rows[0].rowcount +1;
    await pool.query(
      'INSERT INTO suppliers (s_id , s_name , s_no , s_email , s_company_name , s_gst , is_active) VALUES ($1, $2, $3 , $4 , $5 , $6 , $7 )',
      [sup_id , s_name , s_no , s_email , s_company_name , s_gst , is_active]
    );
   return 'Supplier added successfully and supplier id is '+ [sup_id];
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
          let rows = await getData();
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

