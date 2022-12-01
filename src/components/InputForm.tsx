import React, { useState } from "react";

interface IInputForm {
  // addTodo: (text:string)=> void;
  //* yukarıdaki gibi de yazılır, veya globalden çekilir.
  addTodo: AddFn;
}

//! component prop alıyorsa React.FC (function demek FC) yapmak gerekiyor.
const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  // const [task, setTask] = useState<Task>("")
  //* Ts otomatik olarak algılayıp tipi string yaptığı için ilave atama yapmaya gerek yok
  const [task, setTask] = useState("");

  const handleClick = () => {
    addTodo(task);
    setTask("") //* inputu boşalttık
  };

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e) => setTask(e.target.value.toUpperCase())}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task} //? yani input boş ise tıklanamasın, initial değer boş string yani false, değili true,  (yani buton disable olsun true) 
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputForm;
