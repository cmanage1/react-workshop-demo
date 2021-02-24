import logo from './logo.svg';
import './App.css';

import Functional from './components/Functional.component';
import ReactClass from './components/Class.component';

function App() {
  return (
    <div className="App">
      <Functional />
      <ReactClass />
    </div>
  );
}

export default App;
