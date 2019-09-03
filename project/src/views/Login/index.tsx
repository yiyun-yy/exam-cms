import { Button, Input } from 'antd';
import * as React from 'react'
import '../../asscpt/login/index.css'
import { getUserLogin } from '../../service/index'

class Login extends React.Component {
    public state = {
        password: '',
        username: ''
    }
    public render() {
        const { password, username } = this.state;
        return (
            <div className="login">
                <div className="login-item">
                    用户名:<Input placeholder="请输入您的用户名" value={username} name="username" onChange={this.handChange}/>
                </div>
                <div className="login-item">
                    密码框:<Input type="password" placeholder="最少1个大写字母,1个小写字母,1个数字,1个特殊字符" value={password} name="password"  onChange={this.handChange}/>
                </div>
                <div className="login-item">
                    <Button type="primary" onClick={this.submit}>登录</Button>
                    <Button>重置</Button>
                </div>
            </div>
        )
    }
    /**
     * 设置change事件,获取到对应的state的值进行传递
     */
    public handChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    /**
     * 点击登录时,进项发起axios的请求,并把对应的数据进行传递
     */
    public submit = () => {
        const params ={
            user_name:this.state.username,
            user_pwd:this.state.password
        }
        getUserLogin(params).then(res => {
            if(res.data.code===1){
                console.log(this.props)
                // this.props.history.push('/main')
            }
        })
    }
}

export default Login