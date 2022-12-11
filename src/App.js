import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import AddUser from './pages/AddUser';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";



const override ={
  display: "block",
  position:"absolute",
  margin:"0 auto",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)"

};


function App() {
const [users,setUsers]=useState([]);
const [loading, setLoading] = useState(true);
const [value,setValue]=useState('');
useEffect(()=> {
  const getUsers= async ()=>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log(response.data);
    setUsers(response.data);
    setLoading(false);
  }
  getUsers();

},[])

const InputHandler=(e)=>{
  setValue(e.target.value)

}

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <input onChange={InputHandler} type="text" placeholder='Search' className='form-control w-50 mx-auto my-3'/>

      {
        loading ?  <RingLoader
        color='purple' 
        loading={loading}
        cssOverride={override}
        size={150}
        
      />: <Routes>
             <Route path='/' element={<HomePage userList={users}/>}/>
             <Route path='/add' element={<AddUser/>}/>
          </Routes> 
      }
     
      </BrowserRouter>
    
    </div>
  );
}

export default App;
