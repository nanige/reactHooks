import { useState} from 'react'

function AuthManage(){
  const [count, setCount]  = useState(0);
  return (
    <div>
      <p>AuthManage {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default AuthManage