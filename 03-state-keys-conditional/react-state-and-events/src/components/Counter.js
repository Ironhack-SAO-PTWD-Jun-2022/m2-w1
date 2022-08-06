import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(() => 0);
  return(
    <div className="Counter">
      <h2>Counter</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount((prevState) => prevState - 1)}> - </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}> + </button>
    </div>
  )
}

export default Counter;
