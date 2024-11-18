import "./App.css";
import Title from "./assets/components/Title";
import TodoInput from "./assets/components/TodoInput";
import Todos from "./assets/components/Todos";
function App() {
  let Todo = [
    {
      key: 1,
      task: "Learn React",
      isComplete: false,
    },
    {
      key: 2,
      task: "Go to Market",
      isComplete: false,
    },
    {
      key: 3,
      task: "Return Home",
      isComplete: false,
    },
  ];
  return (
    <div className="container my-5">
      <Title />
      <TodoInput />
      <Todos Todo={Todo}></Todos>
    </div>
  );
}

export default App;
