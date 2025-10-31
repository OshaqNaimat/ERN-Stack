import React, { useState, useEffect } from 'react';
import Add from './Add';
import Edit from './Edit';
import axios from 'axios';

const App = () => {
  const url = "http://localhost:5555";
  const [languages, setLanguages] = useState([]);
  const [editData, setEditData] = useState(null);

  const getData = async () => {
    const res = await axios.get(`${url}/coding-languages`);
    setLanguages(res.data);
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

      {editData && (
        <Edit editData={editData} setEditData={setEditData} getData={getData} />
      )}

      <h2 className="text-center mt-4 font-bold text-xl">Languages List</h2>

      {languages.map((item) => (
        <div key={item.id} className="shadow p-3 my-3 w-1/2 mx-auto rounded">
          <h3 className="text-xl font-bold">{item.language}</h3>
          <p>{item.description}</p>
          <p className="text-sm italic">({item.type})</p>

          <div className="flex gap-3 mt-2">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => deleteLang(item.id)}
            >
              Delete
            </button>

            <button
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => setEditData(item)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
