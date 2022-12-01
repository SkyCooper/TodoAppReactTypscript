import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6351820e3e9fa1244e6084b7.mockapi.io/todos";

// interface TodoType {
//   id: string | number;
//   task: string;
//   isDone: boolean;
// }
//? buradan kesip type.d.ts dosyasına taşıdık ve
//? import/export yapmadan global olarak kullanılabilir oldu.

// type AddFn = (text: string) => void;
//* burada global alanda interface olrakda yazabiliriz
//* veya buradaki gibi tip ataması yapıp kullanabiliriz.

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };

    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
