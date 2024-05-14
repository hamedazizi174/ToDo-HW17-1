export default function AddToDo() {
  return (
    <div className="mt-8 flex gap-4">
      <input
        type="text"
        className="outline-none shadow-md p-1 grow"
        placeholder="Task name"
      />
      <select
        className="font-semibold outline-none shadow-md"
        name="priority"
        id="priority"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="text-white bg-green-400 rounded p-1">Add Task</button>
    </div>
  );
}
