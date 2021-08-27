import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Example />, container);
