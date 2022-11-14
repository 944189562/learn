import React, {forwardRef, useImperativeHandle, useRef} from "react";

const JzInput = forwardRef((props, ref) => {
  const inputRef = useRef(null)

  useImperativeHandle(ref, ()=> ({
    focus() {
      console.log('useImperativeHandle')
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} type="text"/>
})

function UseRef(props) {
  const inputRef = useRef(null)

  return (
    <div>
      <h2>UseRef</h2>
      <JzInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>操作DOM</button>
    </div>
  )
}

export default UseRef