import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="blue">
        <h2>Text</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="red">
        <h2>Another Text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
