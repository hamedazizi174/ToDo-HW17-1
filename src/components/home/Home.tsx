import AddToDo from "./AddToDo/AddToDo";
import ToDoList from "./ToDoList/ToDoList";

export default function Home() {
  return (
    <div className="p-10 w-1/3">
      <ToDoList />
      <AddToDo />
    </div>
  );
}
