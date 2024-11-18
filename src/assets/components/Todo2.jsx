const Todo1 = () => {
  let name = "Go to the gym";
  let date = "10.2.2022";
  return (
    <div className="row input">
      <p className="col-sm-4 ">{name}</p>
      <p className="col-sm-4">{date}</p>
      <button className="btn btn-danger col-sm-2">Delete</button>
    </div>
  );
};

export default Todo1;
