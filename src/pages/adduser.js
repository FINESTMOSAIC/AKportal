import { useState } from 'react';
import Navbar from './navbar';
import styles from "../styles/createorder.module.css"

export default function AddUser() {
  const [user_id, setUserId] = useState('0');
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_role, setUserRole] = useState('');
  const [is_active, setIsActive] = useState(true);

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id:user_id,
          user_name:user_name,
          user_email:user_email,
          user_role:user_role,
          is_active:is_active
        }),
      });

      const data = await response.json();
      alert(data.message);
      console.log(data.message); // Log the success message or handle it accordingly
      window.location.reload();
    } catch (error) {
      console.error('Error updating user:', error);
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
      <h1>Users &#62; Add User</h1>
      <hr className={styles.styled_hr}></hr>
        <br></br>
        <label> <strong> User ID </strong> :Generated at the End  </label>
      {/* <input
        type="text"
        pattern="[a-zA-Z0-9]*$"
        placeholder="User ID"
        value={user_id}
        onChange={(e) => setUserId(e.target.value)}
      /> */}
    </div>

    <div className={styles.lower}>

<div className={styles.line}>
            <label>
            Name
          </label>
      <input
        type="text"
        placeholder="User Name"
        value={user_name}
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
        value={user_email}
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
        value={user_role}
        onChange={(e) => setUserRole(e.target.value)}
      />

    </div>
      {/* <input
        type="checkbox"
        checked={is_active}
        onChange={(e) => setIsActive(e.target.checked)}
      /> */}
      <br></br>
      <button onClick={handleUpdate}>Add User</button>
      </div>
    </div>
    </div>
    
    </div>
  );
}
