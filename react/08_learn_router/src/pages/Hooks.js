import React, {useState, memo, useCallback, useMemo, useRef, useEffect} from "react";

const Child1 = memo((props) => {
  console.log('Child1 render~')
  return (
    <p>name: {props.info.name}, age: {props.info.age}</p>
  )
})

const Child2 = memo((props) => {
  console.log('Child2 render~')
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </div>
  )
})

const Child3 = memo((props) => {
  console.log('Child3 render~')
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </div>
  )
})

function Hooks(props) {
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)
  const [info, setInfo] = useState({name: 'jz', age: 18})

  console.log('Hooks render~')

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const useIncrement = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const useDecrement = useMemo(() => {
    return () => {
      setCounter(counter - 1)
    }
  }, [counter])

  const inputRef = useRef(null)
  const numRef = useRef(counter)

  useEffect(() => {
    numRef.current = counter
  }, [counter])

  return (
    <>
      <h1>Hooks</h1>
      <h2>计数器：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      {/*<Child2 increment={increment} decrement={decrement}/>*/}
      {/*<Child3 increment={useIncrement} decrement={useDecrement}/>*/}
      {/*<hr/>*/}
      {/*<button onClick={e => setShow(!show)}>显示/隐藏</button>*/}
      {/*<Child1 info={info}/>*/}
      <hr/>
      <input ref={inputRef} type="text"/>
      <button onClick={e => inputRef.current.focus()}>获取焦点</button>
      <br/>
      <h3>numRef: {numRef.current}</h3>
    </>
  )
}

export default Hooks