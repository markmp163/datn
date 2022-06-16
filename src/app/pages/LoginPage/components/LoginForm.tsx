import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginManagerSlice } from '../slice';
import { selectLoginManager } from '../slice/selectors';

const LoginForm = () => {
  const { actions } = useLoginManagerSlice();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, login } = useSelector(selectLoginManager);
  const onFinish = value => {
    dispatch(actions.hanldeLogin(value));
  };

  useEffect(() => {
    if (login) {
      navigate('/');
      dispatch(actions.setLogin(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);
  return (
    <>
      <h1>Login</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="formLogin"
      >
        <Form.Item
          label="Username"
          name="username"
          labelAlign="left"
          requiredMark="optional"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          labelAlign="left"
          requiredMark="optional"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="input-password" />
        </Form.Item>

        <Form.Item>
          <div className="btn-group">
            <Button htmlType="submit" className="btn__login" loading={loading}>
              Login
            </Button>
            <p className="sign-up-link">
              Don't have an account! <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
