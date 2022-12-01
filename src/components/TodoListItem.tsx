import React from 'react';

interface IListItem {
  item:TodoType;
}


//! component prop alıyorsa React.FC yapmak gerekiyor.
const TodoListItem:React.FC<IlistItem> = ({item}) => {
  return (
    <li>
      <p className='checked'>Todo </p>
      <p> Todo </p>
      <span className="task-icons" >✖️</span>
    </li>
  );
};

export default TodoListItem