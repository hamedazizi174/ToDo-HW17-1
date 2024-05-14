export default function ToDo({ name, priority }) {
  let color: string = "bg-white";
  switch (priority) {
    case "High":
      color = "bg-red-500";
      break;
    case "Medium":
      color = "bg-yellow-500";
      break;
    case "Low":
      color = "bg-green-500";
      break;
  }
  return (
    <div className="flex items-center gap-5 border-b-2 p-2">
      <input type="checkbox" />
      <div className="flex items-center gap-5 grow">
        <p className="text-lg font-semibold">{name}</p>
        <div className={`text-white rounded px-2 py-0.5 text-sm ${color}`}>
          {priority}
        </div>
      </div>
      <button className="text-white bg-red-500 rounded-md px-1">Delete</button>
    </div>
  );
}
