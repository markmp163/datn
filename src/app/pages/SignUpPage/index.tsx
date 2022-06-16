import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet-async';
import SignUpForm from './components/SignUpForm';
import { Wrapper } from './style';

export function SignUpPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Row>
        <Col span={14} className="contentLeft">
          <SignUpForm />
        </Col>
        <Col span={10} className="contentRight">
          <h1>Book Store</h1>
          <h2>Technology v4</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            tempora, doloribus perferendis, quidem accusantium consequatur natus
            sunt odio illum expedita voluptatem, similique fugiat accusamus?
            Quaerat quidem impedit enim fugiat accusantium!
          </p>
          <div className="footer">
            <p>Contact</p>
            <p>nvthang2k.nd@gmail.com | 111-111-1111</p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}
