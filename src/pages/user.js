import { useEffect, useState } from 'react';
import Navbar from './navbar';
import styles from "../styles/createorder.module.css"

export default function UPage() {
    const [users, setUsers] = useState([]);
    const [one_user,setUserId]= useState('');
    const selectedUser = users.find(user => user.user_id === one_user);
    console.log(selectedUser);
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
        // <div>
        // <div>
        //     <h1>
        //         user list
        //     </h1>
        //     <div className="users-container">
        //         {users.map(user => (
        //             <div key={user.user_id} className="user">
        //             <div><strong>user Name:</strong> {user.user_name}</div>
        //             <div><strong>user role:</strong> {user.user_role}</div>
        //             <div><strong>user Date:</strong> {user.user_email}</div>
        //             </div> 
        //         ))}
        //     </div>
        // </div>
        <div className={styles.gridd}>
        <div>
          <Navbar />
        </div>
      <div>
         <div className={styles.container}>
        <div className={styles.upper}>
        <h1>Users &#62; View User</h1>
        <hr className={styles.styled_hr}></hr>
          <br></br>
          
           
          <label> <strong> User ID </strong> </label>
          <select onChange={(e) => setUserId(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {users.map(user => (
             <option key={user.user_id} value={user.user_id}>{user.user_name}({user.user_id})</option>))}
          </select>
        {/* <input
          type="text"
          pattern="[a-zA-Z0-9]*$"
          placeholder="User ID"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
        /> */}
        {/* </div> */}
      </div>
      {selectedUser ?(
    
      <div className={styles.lower}>
      {/* {users.map(user => ( */}
            <div key={selectedUser.user_id} className="user">
  
  <div className={styles.line}>
              <label>
              Name
            </label>
        <input
          type="text"
          placeholder="User Name"
          value={selectedUser.user_name}
          onChange={(e) => setUserName(e.target.value)}
        />
        </div>
  
  <br></br>
  
    <div className={styles.line}>
      <label>
        Email
      </label>
        <input
          type="email"
          placeholder="User Email"
          value={selectedUser.user_email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        </div>
  
  <br></br>
  
  <div className={styles.line}>
    <label>
      Role
    </label>
        <input
          type="text"
          placeholder="User Role"
          value={selectedUser.user_role}
          onChange={(e) => setUserRole(e.target.value)}
        />
  
      </div>
        {/* <input
          type="checkbox"
          checked={is_active}
          onChange={(e) => setIsActive(e.target.checked)}
        /> */}
        <br></br>
        </div>
        {/* <button onClick={handleUpdate}>Add User</button> */}
        <button >Delete User</button>
        </div> ) : (<h2> Please select the user</h2>)}
    
      </div>
      </div>
      
      </div>
    );


    





}
