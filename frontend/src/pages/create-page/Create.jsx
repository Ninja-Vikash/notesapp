import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNoteApi } from "@services/apiServices";
import Root from "@components/containers/Root";

const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const createNote = async () => {
    navigate("/notes");
    try {
      await createNoteApi(data);
    } catch (error) {
      console.log("Error in creatig note", error);
    }
  };

  return (
    <Root>
      <div className="flex gap-2 flex-col">
        <div className="">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              NoteName
            </label>
            <input
              id="name"
              className="bg-zinc-900 px-2 py-2 mt-1 border-0 outline-0 rounded-lg w-full"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              id="description"
              className="bg-zinc-900 px-2 py-2 mt-1 border-0 outline-0 rounded-lg w-full h-32 resize-none"
              type="text"
              name="description"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="bg-blue-700 w-32 px-2 py-3 rounded-2xl hover:cursor-pointer"
          type="submit"
          onClick={createNote}
        >
          Submit
        </button>
      </div>
    </Root>
  );
};

export default Create;
