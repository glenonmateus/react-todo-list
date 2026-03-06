import "./todo-list.style.css";
import { v4 as uuidv4 } from "uuid";

export function ToDoList({ children }) {
  return (
    <ul key={uuidv4()} className="todo-list">
      {children}
    </ul>
  );
}

