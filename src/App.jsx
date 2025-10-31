import React, { useState, useEffect } from 'react';
import Add from './Add';
import axios from 'axios';

const App = () => {
  const url = "http://localhost:5555";
  const [languages, setLanguages] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${url}/coding-languages`);
      setLanguages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteLang = async (id) => {
    await axios.delete(`${url}/delete-language/${id}`);
    getData();
  };

  return (
    <>
      <Add getData={getData} />

      {languages.length === 0 && (
        <p className="text-center text-gray-500">No Languages Added Yet</p>
      )}

      {languages.map((item) => (
        // < className='w-[90%] lg:w-1/md:w-1/2 shadow '>
        <div key={item.id} className="shadow p-3 my-3 w-[90] md:w-1/2 lg:w-1/3  mx-auto rounded">
          <h3 className="text-xl font-bold">{item.language}</h3>
          <p>{item.description}</p>
          <p className="text-sm italic">({item.type})</p>
          <button
            className="bg-red-600 mt-2 text-white px-3 rounded"
            onClick={() => deleteLang(item.id)}
            >
            Delete
          </button>
        </div>
            // </>
      ))}
    </>
  );
};

export default App;
