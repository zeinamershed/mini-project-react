const Tasks = ({ data, deleteToDo }) => {
  return (
    <div>
      {data.map((toDo) => {
        return (
          <div key={toDo.task} className="todo-container">
            <h6 className="todo">{toDo.task}</h6>
            <h6 className="todo-status">{toDo.completed ? "✅" : "✖️"}</h6>
            <button className="delete"
              onClick={() => {
                deleteToDo(toDo.task);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Tasks;
