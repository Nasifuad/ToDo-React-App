/* eslint-disable react/prop-types */
const Todos = ({ Todo }) => {
  return (
    <>
      <ul className=" text-start n-row">
        {Todo.map((todo) => {
          return (
            <div key={todo.key} className="todos">
              <li>{todo.task}</li>
              <p className="date">{todo.Date}</p>
              <button className="btn btn-danger">Delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
