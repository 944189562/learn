import React, {useEffect, useState} from 'react';

function Home(props) {
  const [count, setCount] = useState(0)
  const [friends, setFriends] = useState(['kobe', 'james'])
  const [students, setStudents] = useState([
    {
      name: 'jz',
      age: 28
    },
    {
      name: 'kobe',
      age: 40
    }
  ])

  useEffect(() => {
    document.title = count
    console.log('挂载')

    return () => {
      console.log('销毁')
    }
  }, [count])

  return (
    <div>
      <h1>hook useState()</h1>
      <h2>计数器：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount((prevState => prevState + 10))}>+10</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
      <h2>朋友</h2>
      <ul>
        {
          friends.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'curry'])}>添加朋友</button>
      <h2>学生</h2>
      <ul>
        {
          students.map((item, index) => (
            <li key={item.name}>
              <span>{item.name}, </span>
              <span>{item.age},</span>
              <button onClick={e => addAge(index)}>年龄增加+1</button>
            </li>
          ))
        }
      </ul>
    </div>
  )

  function addAge(index) {
    const newArr = [...students]
    newArr[index].age += 1
    setStudents(newArr)
  }
}

export default Home;