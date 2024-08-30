import { useState } from 'react';

export default function AddUser() {
  const [user_id, setUserId] = useState('');
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
      console.log(data.message); // Log the success message or handle it accordingly
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1>Update or Create User</h1>
      <input
        type="text"
        pattern="[a-zA-Z0-9]*$"
        placeholder="User ID"
        value={user_id}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        value={user_name}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="User Email"
        value={user_email}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Role"
        value={user_role}
        onChange={(e) => setUserRole(e.target.value)}
      />
      <input
        type="checkbox"
        checked={is_active}
        onChange={(e) => setIsActive(e.target.checked)}
      />
      <button onClick={handleUpdate}>Add User</button>
    </div>
  );
}
