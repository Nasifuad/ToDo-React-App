import "./App.css";
import Title from "./assets/components/Title";
import Todo1 from "./assets/components/Todo1";
import TodoInput from "./assets/components/TodoInput";
import Todo2 from "./assets/components/Todo2";
function App() {
  return (
    <div className="container my-5">
      <Title />
      <TodoInput />
      <Todo1 />
      <Todo2 />
    </div>
  );
}

export default App;
