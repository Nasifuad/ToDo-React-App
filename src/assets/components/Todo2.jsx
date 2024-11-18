const Todo1 = () => {
  let name = "Go to the gym";
  let date = "10.2.2022";
  return (
    <div className="row">
      <h1 className="col-sm-6">{name}</h1>
      <p className="col-sm-4">{date}</p>
      <button className="btn btn-danger col-sm-2">Delete</button>
    </div>
  );
};

export default Todo1;
