import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Add = ({getData}) => {

    const [formField, setFormField] = useState({
        langauge: "",
        description: "",
        type: ""
    })

    const {langauge, description, type} = formField

    const handleAddLangauge = async (e)=>{
        e.preventDefault()
        let response = await axios.post('http://localhost:5555/post-language',{
            language,description,type
        })
        console.log(response.data)
        getData()
    }


    const handleChange = (e)=>{
        setFormField({
            ...formField,
            [e.target.name] : e.target.value
        })
    }
  return (
    <>
    <div className="container my-6 rounded-md mx-auto shadow shadow-black p-3 w-[90%] md:w-1/2 lg:w-1/3">
    <form >
      <label htmlFor="" className='font-semibold '>Language</label>
      <input name={langauge} type="text" onChange={handleChange} placeholder='e.g Javascript' className='w-full outline-0 border-1
       rounded-md p-1 border-red-500' />
       <label htmlFor="" className='font-semibold '>Description</label>
       <textarea name={description} onChange={handleChange} placeholder='About Language .....' className='w-full p-2 outline-0 border-1 rounded-md border-green-500'></textarea>
       <label htmlFor="" className='font-semibold '>Type</label>
       <select name={type} id="" onChange={handleChange} className='w-full p-1 outline-0 border-1 rounded-md border-blue-500'>
        <option value="Assembly language">Assembly language</option>
        <option value="Low Level language">Low Level language</option>
        <option value="High Level language">High Level language</option>
       </select>
       <button onClick={handleAddLangauge}  className='my-2 w-full bg-green-500 rounded-md text-white p-1 cursor-pointer hover:bg-green-600 active:scale-90 duration-100'>Add Language</button>
    </form>

    </div>
    
    
    </>
  )
}

export default Add