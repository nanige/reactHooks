import { useState} from 'react'

function CampusManage(){
  const [count, setCount]  = useState(0);
  return (
    <div>
      <p>CampusManage {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default CampusManage