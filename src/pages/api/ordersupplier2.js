import pool from '../../../utils/pdb';




async function getData2(req){
  const {s_id} = req.body;
  

  const {rows} = await pool.query("SELECT * FROM public.orders where status = 'Completed' and s_id = $1;",[s_id] );
  return rows
}



export default async function handler(req, res) {
    try {
            console.log("going in")
            let rows = await getData2(req);
            res.status(200).json(rows);



      }
      catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }

