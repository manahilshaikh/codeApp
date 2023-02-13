
import './App.css';
import { FirstComp } from './FirstComp';
import { Form } from './Form';
import { StateMang } from './StateMang';
import { SchoolForm } from './Component/SchoolForm';
// import { DataCard } from './Component/DataCard';
import { AddDelete } from './Component/AddDelete';
import { TodoList } from './Component/TodoList';

function App() {
  return (
    <div className="App">
      {/* <FirstComp/> */}
      {/* <Form/> */}
      {/* <h1>This is my app</h1> */}
      {/* <StateMang/> */}
      {/* <SchoolForm/> */}
      {/* <DataCard /> */}
      <AddDelete/>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
