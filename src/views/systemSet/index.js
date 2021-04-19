import { useState} from 'react'

function List(){
  const [count, setCount]  = useState(0);
  return (
    <div>
      <p>list {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default List