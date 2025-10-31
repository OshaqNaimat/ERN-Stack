import React, { useState } from "react";
import axios from "axios";

const Edit = ({ editData, setEditData, getData }) => {
  const [inputs, setInputs] = useState(editData);
  const url = "http://localhost:5555";

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const updateLanguage = async (e) => {
    e.preventDefault();

    await axios.put(`${url}/update-language/${editData.id}`, inputs);

    getData();
    setEditData(null); // close edit form
  };

  return (
    <div className="bg-gray-200 p-4 w-1/2 mx-auto rounded my-4 shadow">
      <h3 className="text-lg font-bold mb-2">Edit Language</h3>

      <form onSubmit={updateLanguage}>
        <input
          className="border p-2 w-full"
          type="text"
          name="language"
          value={inputs.language}
          onChange={handleChange}
        />

        <textarea
          className="border p-2 w-full mt-2"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        />

        <select
          name="type"
          value={inputs.type}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        >
          <option value="Assembly language">Assembly language</option>
          <option value="Low Level language">Low Level language</option>
          <option value="High Level language">High Level language</option>
        </select>

        <button
          className="bg-green-600 w-full mt-3 text-white p-2 rounded"
          type="submit"
        >
          Update
        </button>

        <button
          className="bg-gray-600 w-full mt-2 text-white p-2 rounded"
          onClick={() => setEditData(null)}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
