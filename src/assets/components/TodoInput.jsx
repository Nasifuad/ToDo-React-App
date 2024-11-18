const TodoInput = () => {
  return (
    <div className="row input">
      <input type="text" placeholder="Enter your todo" className="col-sm-4" />
      <input type="date" className="col-sm-4" />
      <button className="btn btn-success col-sm-2">Add</button>
    </div>
  );
};

export default TodoInput;
