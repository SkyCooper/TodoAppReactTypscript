import React from "react";

interface IListItem {
  item: TodoType;
}
//* buradaki interface de aslında types.d.ts içine alınıp global yapılabilirdi.

//! component prop alıyorsa React.FC (function demek FC) yapmak gerekiyor.
const TodoListItem: React.FC<IListItem> = ({ item }) => {
  return (
    <li>
      {item.isDone ? ( // yani tammlanmış ise üstünü çiz, değilse normal yaz
        <p className="checked">{item.task} </p>
      ) : (
        <p> {item.task} </p>
      )}
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
