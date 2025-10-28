import React from 'react'
import Add from './Add'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const url = "http://localhost:5555/add-language"
  const [languages,setLanguages] = useState([])
  const getData = async ()=>{ 
    let response = await fetch (url)
    const data = await response.json()
    setLanguages(data)
  }
    
   useEffect(()=>{
  getData()
   },[])

  
  return (
    <>
    <Add getData={getData}/>
    {languages?.map((item,index)=>{
      return (
        <>
        <div className="">
          <h4 className='text-3xl'>{item.language}</h4>
          <p>{item.description}</p>
        </div>
        
        
        </>
      )
    })}
    </>
  )
}

export default App