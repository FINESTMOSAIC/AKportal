import pool from '../../../utils/pdb';


async function getDataSupplier( username , name ){
    const { rows } = await pool.query('SELECT * FROM suppliers where s_id = $1 and s_name = $2', [username , name ]);  
    console.log("from querry" + rows );
    return rows;
}

async function getDataUser( username , name ){
    const { rows } = await pool.query('SELECT * FROM users where user_id = $1 and user_name = $2', [username , name ]);  
    
    console.log( rows );
    
    return rows;

}


export default async function handler(req, res) {
    try {
        const {username , name , table } = req.body;
        switch (table) {
            case "users":
                let rows_u = await getDataUser( username , name );
                console.log ("from db" + rows_u);
                if (rows_u.length > 0 ){
                    res.status(200).json({ "message" : "user" , 'data' :rows_u });

                }

                res.status(401).json({ "message" : 'Invalid Username or Password '});
                break;

            case "suppliers":
                let rows_s = await getDataSupplier( username , name );

                if (rows_s.length > 0 ){
                    res.status(200).json({ "message" : "supplier" , 'data' :rows_s });

                }

                res.status(401).json({ "message" : 'Invalid Username or Password '});
                break;

            default:
                break;


        }

    }
    catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
        res.status(500).json({ message: 'Invalid username or name' });
    }
}

