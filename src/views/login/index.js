import { useState} from 'react'
// import './index.less'

function Login(){
  const [count, setCount]  = useState(0);
  return (
    <div className="login">
      <div className="wrapper">
        <div className="logo"><img src="https://res.miaocode.com//b_crm/images/logo.png" alt=""/></div>
        <p className="login-title">OMO后台管理系统</p>
        <div  className="login-form"></div>
        <div className="footer">
          沪B2-20190223 版权所有©上海耕子教育科技有限公司 <a href="https://beian.miit.gov.cn/">沪ICP备17031644号-1</a> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402005777">沪公网安备31010402005777号</a><br />
          Shanghai G&Z Educational Technology Co.,Ltd
        </div>
      </div>
    </div>
  )
}

export default Login