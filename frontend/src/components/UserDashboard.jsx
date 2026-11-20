import React from 'react'
import { getAllUsers } from '../services/admin.service';

const UserDashboard = () => {
    const getUsers=async()=>{
        try {
            const response=await getAllUsers();
            console.log(response);
        } catch (error) {
           alert(error.message); 
        }
    }
  return (
    <>
    <div>UserDashboard</div>
    <button 
    onClick={getUsers}
    className="btn btn-success">
        Get Users
    </button>
    </>

  )
}

export default UserDashboard