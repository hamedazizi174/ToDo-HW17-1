import ToDo from "./ToDo/ToDo";

export default function ToDoList() {
  return (
    <>
      <div className="text-lg font-bold mb-6">ToDo List</div>
      <ToDo name={"Task 1"} priority={"High"} />
      <ToDo name={"Task 1"} priority={"Medium"} />
      <ToDo name={"Task 1"} priority={"Low"} />
    </>
  );
}
