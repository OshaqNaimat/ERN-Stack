import React, { useState } from 'react';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

const Add = ({ getData }) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    language: "",
    description: "",
    type: "",
  });

  const { language, description, type } = inputs;

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleLanguage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5555/add-language", {
        language,
        description,
        type,
      });

      setInputs({
        language: "",
        description: "",
        type: "",
      });

      getData();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="container flex w-1/2  mx-auto p-5 shadow-lg shadow-black rounded-md mt-5 rounded">
      <form onSubmit={handleLanguage}>
        <label>Language</label>
        <input
          value={language}
          name="language"
          type="text"
          placeholder="e.g. JavaScript"
          onChange={handleChange}
          className="w-full border p-2 outline-0 border-red-500 border-2 rounded-md shadow-lg"
        />

        <label>Description</label>
        <textarea
          value={description}
          name="description"
          placeholder="About language..."
          onChange={handleChange}
          className="w-full border p-2 outline-0 border-green-700 border-2 rounded-md shadow-lg"
        />

        <label>Type</label>
        <select
          value={type}
          name="type"
          onChange={handleChange}
          className="w-full border p-2 outline-0 border-blue-500 border-2 rounded-md shadow-lg"
        >
          <option value="">Select Type</option>
          <option value="Assembly language">Assembly language</option>
          <option value="Low Level language">Low Level language</option>
          <option value="High Level language">High Level language</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 mt-3 rounded"
        >
          {loading ? <HashLoader size={20} /> : "Add Language"}
        </button>
      </form>
    </div>
  );
};

export default Add;
