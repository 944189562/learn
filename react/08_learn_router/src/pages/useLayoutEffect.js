import React, {useEffect, useLayoutEffect, useState} from "react";

function UseLayoutEffect(props) {
  const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   if(counter === 0) {
  //     setCounter(1 + Math.random())
  //   }
  // })

  useLayoutEffect(() => {
    if(counter === 0) {
      setCounter(1 + Math.random())
    }
  })

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>计数: {counter}</p>
      <button onClick={e => setCounter(0)}>+1</button>
    </div>
  )
}

export default UseLayoutEffect