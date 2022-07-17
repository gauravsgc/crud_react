import React,{useState,useEffect} from 'react'
import  {Table} from 'react-bootstrap'
import axios from 'axios'
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
export default function Home() {
  const [data,setData]=useState([]);
  const fetchData=async()=>{
    try {
      const {data:response} = await axios.get('http://localhost:4000/myapp');
      setData(response);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
fetchData();
  },[])
  /*.........*/
//   const dataDelete=(id)=>{
// alert(id);
// console.log(id);
//   }

  return (
    <div>

<Table striped bordered hover size="sm"  style={{ width: '40rem' }}>
  <thead>
    <tr>
      
      <th>username Name</th>
      
      <th>User password</th>
    </tr>
    
    
  

  </thead>
  <tbody>
    

  {data.map((e,index)=><tr key={index}><td key={index}>{e.username}</td>
  <td>{e.userpass}</td>
  <td><Link to={`/Edit/${e.id}`} >Edit</Link></td> 
  <td><Link to={`/Delete/${e.id}`}>Delete</Link></td> 
  {/* <td>
    <button onClick={dataDelete(`${e.id}`)}>
    Delete
    </button>
    
    </td> */}
  
  </tr>
  
  )}
      
  </tbody>
</Table>




    </div>
  )
}
