import React, { FC } from "react";
import TodoListItem from "./TodoListItem";

// interface ITodoList {
//   todos: TodoType[];
// }
//? buradan kesip type.d.ts dosyasına taşıdık ve
//? import/export yapmadan global olarak kullanılabilir oldu.

//! component prop alıyorsa React.FC yapmak gerekiyor.
// const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const TodoList: FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  // {FC} olarak import edip yukarıdaki gibi kullanılabilir.
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
