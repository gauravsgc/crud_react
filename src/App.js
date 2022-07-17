//import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navi';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import Edituser from './Component/Edituser';
import Delete from './Component/Delete';
function App() {
  return (
    <div className="App">

     
      <Router> 
      <Nav></Nav>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />}
 />    
 <Route path='/Edit/:id' element={<Edituser />}
 />  
 <Route path='/Delete/:id' element={<Delete />}/>    
      <Route path="*" element={<Error/>} />
      </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
