import { Button, Col, Form, Input, Row } from 'antd';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Helmet>
        <title>{t('contact')}</title>
      </Helmet>
      <NavBar />
      <div className="title">
        <h3>{t('title-contact1')}</h3>
        <h1>{t('title-contact2')}</h1>
      </div>
      <div className="content">
        <div className="detailContact">
          <Row>
            <Col span={8}>
              <h3 className="title-desc">{t('store01')}</h3>
              <p className="desc">
                <p>{t('address')}</p>
                <p>500 Terry Francois St. SF, CA 94158</p>
              </p>
              <p className="desc">
                <p>{t('tel')}</p>
                <p>123-456-7890</p>
              </p>
              <p className="desc">
                <p>Email</p>
                <p>info@my-domain.com</p>
              </p>
            </Col>
            <Col span={8}>
              <h3 className="title-desc">{t('store02')}</h3>
              <p className="desc">
                <p>{t('address')}</p>
                <p>500 Terry Francois St. SF, CA 94158</p>
              </p>
              <p className="desc">
                <p>{t('tel')}</p>
                <p>123-456-7890</p>
              </p>
              <p className="desc">
                <p>Email</p>
                <p>info@my-domain.com</p>
              </p>
            </Col>
            <Col span={8}>
              <h3 className="title-desc">{t('customer-service')}</h3>
              <p className="desc">
                <p>{t('tel')}</p>
                <p>1-800-000-0000</p>
              </p>
              <p className="desc">
                <p>Email</p>
                <p>info@my-domain.com</p>
              </p>
            </Col>
          </Row>
          <Form className="formContact">
            <Form.Item
              name={'name'}
              label={t('name')}
              className="inputName"
              labelAlign="left"
              requiredMark="optional"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              labelAlign="left"
              requiredMark="optional"
              className="inputEmail"
              name={'email'}
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={t('message')}
              labelAlign="left"
              requiredMark="optional"
              className="inputMessage"
              name={'message'}
              rules={[
                { required: true, message: 'Please input your message!' },
              ]}
            >
              <Input.TextArea showCount autoSize={{ minRows: 4, maxRows: 4 }} />
            </Form.Item>
            <Form.Item className="divSubmit">
              <Button htmlType="submit">{t('submit')}</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default ContactPage;

const Wrapper = styled.div`
  .title {
    padding-top: 60px;
    text-align: center;
    h3 {
      font-size: 30px;
      margin-bottom: 6px;
    }

    h1 {
      font-size: 50px;
      font-family: ${({ theme }) => theme.secondaryFont};
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .content {
    width: 85%;
    margin: 130px auto 80px;
    background-color: ${({ theme }) => theme.brightGrayColor};
    height: 850px;
    position: relative;

    .detailContact {
      position: absolute;
      padding: 90px;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      border: 15px solid ${({ theme }) => theme.blackColor};
      width: 60%;
      height: 100%;
      background-color: ${({ theme }) => theme.whiteColor};
    }
  }

  .ant-col {
    padding: 0 10px;
  }
  .title-desc {
    font-family: ${({ theme }) => theme.secondaryFont};
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }

  .desc {
    p {
      &:first-child {
        margin-bottom: 3px;
        font-weight: bold;
        opacity: 0.8;
      }
    }
    margin-bottom: 35px;
  }

  .formContact {
    display: flex;
    flex-wrap: wrap;
    .ant-input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.blackColor};
      border-radius: 0;
    }

    .ant-form-item {
      display: flex;
      flex-direction: column;
    }

    .inputName {
      width: 50%;
    }
    .inputEmail {
      width: 50%;
    }
    .inputMessage {
      width: 100%;
    }

    .divSubmit {
      width: 100%;
      text-align: center;
      margin-top: 20px;

      .ant-btn {
        font-size: 16px;
        height: auto;
        width: auto;
        color: ${({ theme }) => theme.blackColor};
        border: none;
        box-shadow: none;
        border-radius: 0;
        border: 2px solid transparent;

        &:hover {
          border: 2px solid ${({ theme }) => theme.blackColor};
          background-color: ${({ theme }) => theme.blackColor};
          color: ${({ theme }) => theme.textLight};
        }

        &::after {
          display: none;
        }
      }
    }
  }
`;
