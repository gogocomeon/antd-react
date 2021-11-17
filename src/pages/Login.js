import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import {setToken} from '../utils/auth'
import './login.css'
import {loginApi} from '../services/auth'
import { setToken } from '../utils/auth';

function Login(props) {
    const onFinish = (values: any) => {
        // setToken(values.username)
        // props.history.push("/admin")
        loginApi({
            userName: values.username,
            passWord: values.password
        }).then(
            res=>{
              if(res.data.code===200){
                message.success("登录成功! ")
                setToken(res.data.content)
props.history.push('/admin')
              }else{
                message.info('用户名或密码错误!')
              }
            }
        )
        .catch(
          err =>{
            message.error("用户不存在")
          }
        )


      };
    return (
        // <Card title="晓欣的系统登录页" className="login-form">
        <Card title="账务自动化系统" className="loginform">
        <Form
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="http://www.baidu.com">
          忘记密码
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
         {/* <a href="http://www.baidu.com">注册</a> */}
      </Form.Item>
    </Form>
     </Card>
    )
}

export default Login;
