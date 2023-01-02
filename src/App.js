import logo from './logo.svg';
import './App.css';
import { Task1 } from './Task1/Task1';
import { Task2 } from './Task2/Task2';
import { Task3 } from './Task3';
import { Task4 } from './Task4';
import { Task5 } from './Task5';

function App() {
  return (
    <div className="App">
     <Task1/>
     <hr />
     <Task2/>
     <Task3/>
     <Task4/>
     <hr />
     <Task5/>
     <br />
    </div>
  );
}

export default App;
