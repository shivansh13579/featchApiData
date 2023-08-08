
import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './Component/Footer';

function App() {
    const[todoData,setTodoData] = useState([]);

  const getData=async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const resp = await data.json();
    setTodoData(resp);
  }
  useEffect(()=>{
      getData();
  },[todoData])


  return (
    <div>
    <nav>
      <button>Home</button>
      <button>Product</button>
      <button>About</button>
      <button>Contact</button>
    </nav>
     {
      todoData.map((e,i)=>{
        return <div className='todoCard'><h1>{i+1 + '. ' + e.title}</h1> <p>status : {e.completed ? "Completed":"Pending"}</p></div>
      })
     }
     <Footer/>
    </div>
  )
}

export default App
