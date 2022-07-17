import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router'
export default function Delete() {
  let {id}=useParams();
  let Navigate=useNavigate();
  console.log(id);
  const Deletedata= async()=>{

    
     //console.log(`${id}`);
        await axios.delete(`http://localhost:4000/myapp/${id}`);
    Navigate('/');
      }


  
  useEffect(()=>{
Deletedata  ();
},);
  return (
    <div>Delete</div>
  )
}
