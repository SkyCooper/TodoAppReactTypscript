import React from "react";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}
//* buradaki interface de aslında types.d.ts içine alınıp global yapılabilirdi.

//! component prop alıyorsa React.FC (function demek FC) yapmak gerekiyor.
const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo, deleteTodo }) => {
  return (
    <li>
      {item.isDone ? ( // yani tammlanmış ise üstünü çiz, değilse normal yaz
        <p onClick={() => toggleTodo(item)} className="checked">
          {item.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}> {item.task} </p>
      )}
      <span className="task-icons" onClick={()=>deleteTodo(item.id)}>🗑</span>
    </li>
  );
};

export default TodoListItem;
