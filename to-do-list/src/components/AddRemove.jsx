import React, { useState } from "react";

function AddRemove() {
  const [text, addtext] = useState("");

  const addTask = () => {
    addtext(true);
  };
  return (
    <>
      <h1 className="text-white text-center text-3xl">Task Manager</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button
        onClick={addTask}
        className="border-none font-serif bg-violet-700 p-1"
      >
        Add
      </button>
      {text && <p className="text-white">{text}}</p>}
    </>
  );
}

export default AddRemove;
