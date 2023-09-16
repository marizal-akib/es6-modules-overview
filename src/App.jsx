import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect( () =>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data => setWatches(data));
  } ,[])

  // const watches =[
  //   {id:1, name: 'CASIO', price: 250},
  //   {id:2, name: 'Apple', price: 20000},
  //   {id:3, name: 'Samsung', price: 25000},

  // ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}> </Watch>)
      }
    </>
  )
}

export default App
