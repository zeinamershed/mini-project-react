const Tasks = ({ data, deleteToDo }) => {
  return (
    <div>
      {data.map((toDo) => {
        return (
          <div>
            <h6>{toDo.task}</h6>
            <h6>{toDo.completed ? "✅" : "✖️"}</h6>
            <button
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
