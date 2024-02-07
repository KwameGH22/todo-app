import React, { createContext, useState } from "react";
import TaskView from "../components/TaskView";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [itemList, setItemList] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkTheme, setDarkTheme] = useState(false);

  const addItem = (text) => {
    const newList = {
      id: Date.now(),
      title: text,
      complete: false,
    };
    setTodos([...todos, newList]);
  };
  console.log(todos);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const setFilterValue = (value) => setFilter(value);

  const keepFiltering = () => {
    if (filter === "all") {
      return todos.map((todo) => <TaskView key={todo.id} {...todo} />);
    } else if (filter === "active") {
      return todos
        .filter((todo) => !todo.complete)
        .map((todo) => <TaskView key={todo.id} {...todo} />);
    } else if (filter === "complete") {
      return todos
        .filter((todo) => todo.complete)
        .map((todo) => <TaskView key={todo.id} {...todo} />);
    }
    return null; // Nothing to return
  };

  const completedItems = () => {
    const clearCompletedItems = todos.filter((todo) => !todo.complete);
    setTodos(clearCompletedItems);
  };

  const getCount = () => {
    if (filter === "all") {
      return todos.length;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.complete).length;
    } else if (filter === "complete") {
      return todos.filter((todo) => todo.complete).length;
    }
    return 0;
  };

  const handleTheming = () => {
    setDarkTheme(!darkTheme);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(itemList);
    setItemList("");
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        itemList,
        setItemList,
        filter,
        setFilter,
        darkTheme,
        setDarkTheme,
        addItem,
        handleToggle,
        removeTodo,
        setFilterValue,
        keepFiltering,
        completedItems,
        getCount,
        handleTheming,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
