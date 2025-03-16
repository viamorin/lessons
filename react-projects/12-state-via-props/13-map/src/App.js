import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const nameButton = [
  'buttonOne',
  'buttonTwo',
  'buttonThree',
  'buttonFour',
  'click me',
  'press me',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {nameButton.map((name, index) => {
        return (
          <Button
            onClick={incrementCount}
            nameButton={name}
            key={index}
          ></Button>
        );
      })}
    </div>
  );
}

export default App;
