import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { MdCancel, MdDeleteForever, MdCheck } from "react-icons/md";

const TaskView = (todo) => {
  const { darkTheme, handleToggle, todos, removeTodo } = useContext(AppContext);
  
  console.log(todo);

  return (
    <div
      className={`${
        darkTheme ? "bg-[#0e033d]  text-white" : "bg-white"
      } flex  p-4 h-12 items-center justify-between text-blue-500 lg:w-[50%] md:w-[50%] m-auto shadow-2xl mt-1 mb-1 max-sm:mx-[5%] `}
    >
      <div className="items-center flex p-7 justify-between gap-5  ">
        {todo?.complete ? (
          <MdCheck
            className="h-5 w-5 text-blue-500"
            onClick={() => handleToggle(todo.id)}
          />
        ) : (
          <MdCancel
            className="h-5 w-5 text-blue-500"
            onClick={() => handleToggle(todo.id)}
          />
        )}
        <h2 className={`${todo?.complete && "line-through"} `}>{todo?.title}</h2>
      </div>
      <div>
        <MdDeleteForever
          className="col text-red-500  h-5 w-5"
          onClick={() => removeTodo(todo?.id)}
        />
      </div>
    </div>
  );
};

export default TaskView;
