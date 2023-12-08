import { useState } from 'react';
import './style.css';

function App() {

  const [min,setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [random, setRandom] = useState(6);

  const randomNumber = () =>{
    setRandom(Math.floor(Math.random()*(max-min+1)+min))
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="random">
          <p>Random Number: <span>{random}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
            type="number"
            placeholder='Minimum'
            value={min}
            onChange={e=>setMin(parseInt(e.target.value))}
            />
          </div>
          <div>
            <p>Max:</p>
            <input
            type="number"
            placeholder='Maximum'
            value={max}
            onChange={e=>setMax(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button onClick={randomNumber}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
