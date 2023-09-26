import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import request from "../../server";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TOKEN } from "../../constants";
const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const {
        data: { token },
      } = await request.post("auth/login", values);
      Cookies.set(TOKEN, token);
      setIsAuthenticated(true);
      console.log(token);
      navigate("/my-blogs");
    } catch (err) {
      message.error(err.message);
    }
  };
  return (
    <div className=" w-full h-screen pt-[68px]">
      <h1 className="text-center mb-[76px] login-title">Login</h1>
      <div className="flex justify-center w-full">
        <Form
          name="normal_login"
          className="w-1/2 login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="w-full site-form-item-icon " />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="flex flex-col ">
            <Button
              type="primary"
              htmlType="submit"
              className="flex items-center justify-center w-full py-4 login-form-button login-btn"
              style={{ background: "#FFD050" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
