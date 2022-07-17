import axios from 'axios';
import React, {useState,useEffect } from 'react'
import { useParams, useNavigate} from 'react-router'
export default function Edituser() {

  const { id } = useParams();
  let navigate = useNavigate();
  //const history=useHistory();
  const initialvalue =
  {
    username: '',
    userpass: ''
  }
  const [state, setState] = useState(initialvalue);

  const handlechange = (e) => {
    console.log(e.target);
const {name,value}=e.target;
setState({...state,[name]:value})
  }

    /*setState(
      {
        ...state,
        [e.target.name]:e.target.value});
      };*/
    
  

  const getData = async () => {
    try {
console.log(`http://localhost:4000/myapp/1`);
       const res = await axios.get(`http://localhost:4000/myapp/${id}`)
      
        console.log(res.data);
        console.log(res.data[0].username);
        console.log(res.data[0].userpass);
     setState(res.data[0]);
    
  }
    catch (error) {
      console.log(error);
    }
  
  }
  useEffect (() => { getData();},[])
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("edit button press")
    console.log(state);
    console.log(`http://localhost:4000/myapp,state`);
    let data={};
    data.username=state.username;
    data.userpass=state.userpass;
    console.log(data);
await axios.put(`http://localhost:4000/myapp/${id}`,data);
navigate('/');
  }
  return (
    <div>{id}

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" name="username" id="" value={state.username} onChange={handlechange}  readOnly/>

        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="userpass" id='' value={state.userpass}

          onChange={handlechange} />

        <br />
        <button>Edit</button>
      </form>



    </div>
  )
}
