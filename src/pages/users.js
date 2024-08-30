import { useEffect, useState } from 'react';

export default function UPage() {
    const [users, setUsers] = useState([]);
    useEffect(() => 
        {const fetchData = async () => {
        try {
            let config = {
                method: 'GET'
            }
            const response = await fetch('/api/user',config); 
            const data = await response.json();
  
            setUsers(data);
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
                user list
            </h1>
            <div className="users-container">
                {users.map(user => (
                    <div key={user.user_id} className="user">
                    <div><strong>user Name:</strong> {user.user_name}</div>
                    <div><strong>user role:</strong> {user.user_role}</div>
                    <div><strong>user Date:</strong> {user.user_email}</div>
                    </div> 
                ))}
            </div>
        </div>


    )





}
