import pool from '../../../utils/pdb';




async function getData(){
    const { rows } = await pool.query('SELECT * FROM users'); 
    return rows;

}

async function createData(req,res){

        const { user_id, user_name, user_email, user_role } = req.body;

    try {
  // Optional: Check if the user already exists
  // const { rowCount } = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);

  await pool.query(
    'INSERT INTO users (user_id, user_name, user_email, user_role) VALUES ($1, $2, $3, $4)',
    [user_id, user_name, user_email, user_role]
  );

  return 'User added successfully';

    }
    catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ message: 'Internal server ' });
      }


}



export default async function handler(req, res) {

    try {
        switch (req.method){
            case "GET":

                let rows = await getData();
                res.status(200).json(rows);
                break;

                
            case "POST":
                let createResp = await createData(req,res);
                res.status(200).json({'message': createResp})
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

