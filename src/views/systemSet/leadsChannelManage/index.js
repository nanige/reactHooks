import { useState} from 'react'

function LeadsChannelManage(){
  const [count, setCount]  = useState(0);
  return (
    <div>
      <p>LeadsChannelManage {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default LeadsChannelManage