
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputtask] = useState("");
  console.log(task);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-100 to-indigo-100 flex justify-center items-start px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-white">

        <h1 className="text-sky-600 text-3xl font-bold text-center mb-2">
          My Todo List
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Organize your day, one task at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your task..."
            onChange={(e) => {
              setInputtask(e.target.value);
            }}
            value={inputTask}
            className="flex-1 min-w-0 border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition duration-200"
          />

          <button
            className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200"
            onClick={(e) => {
              if (inputTask.trim() !== "") {
                setTask([...task, inputTask.trim()]);
                setInputtask("");
              }
            }}
          >
            + Add Task
          </button>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <h2 className="text-lg font-bold text-gray-700 mb-4">
            Your Tasks
            {/* <span className="ml-2 text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              {task.length}
            </span> */}
          </h2>

          {task.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-3 bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 mb-3 hover:shadow-md hover:border-sky-200 transition duration-200"
              >
                <p className="text-gray-700 font-medium wrap-break-word min-w-0">
                  <span className="text-sky-500 font-bold mr-2">
                    {index + 1}.
                  </span>
                  {item}
                </p>

                <button
                  className="bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border border-red-100 px-3 py-2 rounded-lg text-sm font-semibold transition duration-200 shrink-0"
                  onClick={() => {
                    setTask(task.filter((item, i) => i !== index));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
