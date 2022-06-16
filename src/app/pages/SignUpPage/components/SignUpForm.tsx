import { Button, Form, Input } from 'antd';
import { Link } from 'app/components/Link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSignUpManagerSlice } from '../slice';
import { selectSignUpManager } from '../slice/selectors';

const SignUpForm = () => {
  const { actions } = useSignUpManagerSlice();
  const dispatch = useDispatch();
  const { loading, nextToLogin } = useSelector(selectSignUpManager);
  const navigate = useNavigate();
  const onFinish = (value: any) => {
    dispatch(actions.signUp(value));
  };

  useEffect(() => {
    if (nextToLogin) {
      navigate('/login');
      dispatch(actions.setNextToLogin(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextToLogin]);
  return (
    <Wrapper>
      <h1>Sign up</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="formLogin"
      >
        <div className="name">
          <Form.Item
            label="First name"
            name="firstName"
            labelAlign="left"
            requiredMark="optional"
            rules={[
              { required: true, message: 'Please input your firstName!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            labelAlign="left"
            requiredMark="optional"
            rules={[{ required: true, message: 'Please input your lastName!' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          label="Email"
          name="email"
          labelAlign="left"
          requiredMark="optional"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          labelAlign="left"
          requiredMark="optional"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          labelAlign="left"
          requiredMark="optional"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input />
        </Form.Item>
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
            <Button className="btn__signup" htmlType="submit" loading={loading}>
              Sign up
            </Button>
            <p className="login-link">
              Already have an account! <Link to="/login">Log in</Link>
            </p>
          </div>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  .name {
    display: flex;
    justify-content: space-between;

    .ant-form-item {
      width: 48%;
    }
  }
`;
