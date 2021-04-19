import { useState} from 'react'

function Index(){
  const [count, setCount]  = useState(0);
  return (
    <div>
      <p>You clicked {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default Index