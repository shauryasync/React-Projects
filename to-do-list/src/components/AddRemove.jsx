import React, { useState } from "react";

function AddRemove() {
  const [todo, setToDo] = useState([]);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      // Check if input isn't empty
      setToDo([...todo, text]);
      setText(""); // ✅ This clears the input after adding
    }
  };

  const handleDelete = (index) => {
    const updatedList = todo.filter((item, i) => i !== index);
    setToDo(updatedList);
  };

  const handleClearAll = () => {
    setToDo([]);
  };

  return (
    <div className="flex flex-col gap-4 p-10 bg-slate-800 text-white min-h-screen">
      <h2 className="text-3xl font-bold">Task Manager</h2>

      <form onSubmit={handleTodo} className="flex items-center gap-4">
        <input
          value={text} // ✅ Connects state back to input
          placeholder="task..."
          onChange={handleText}
          className="text-black p-2 rounded"
        />
        <button type="submit" className="bg-green-700 px-4 py-2 rounded">
          add
        </button>
      </form>

      <ul className="flex flex-col gap-2">
        {todo.map((item, index) => (
          <li
            key={index}
            className="bg-slate-700 p-2 rounded shadow-sm flex flex-row justify-between"
          >
            {item}
            <button
              className="bg-green-700 px-4 py-2 rounded"
              onClick={() => handleDelete(index)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      {todo.length > 0 && (
        <button
          className="self-center rounded bg-red-700 px-4 py-2"
          onClick={handleClearAll}
        >
          ClearAll
        </button>
      )}
    </div>
  );
}

export default AddRemove;
