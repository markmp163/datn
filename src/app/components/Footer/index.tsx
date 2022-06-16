import { Col, Row } from 'antd';
import styled from 'styled-components';
import {
  BsArrowUpCircle,
  BsFacebook,
  BsPinterest,
  BsTwitter,
} from 'react-icons/bs';
import { FaInstagramSquare, FaQq, FaShippingFast } from 'react-icons/fa';
import { MdPayment, MdPolicy } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const handleBackTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Wrapper>
      <Row className="desc">
        <Col span={6}>
          <p className="title">BINK. Publishers</p>
          <p className="listItem">500 Terry Francois St.</p>
          <p className="listItem">San Francisco, CA 94158</p>
          <p className="listItem">123-456-7890</p>
          <p className="listItem">info@my-domain.com</p>
        </Col>
        <Col span={6}>
          <p className="title">{t('shop')}</p>
          <a href="/" className="listItem">
            <FaQq className="iconFooter" />
            {t('faq')}
          </a>
          <a href="/" className="listItem">
            <FaShippingFast className="iconFooter" />
            {t('shipping-and-return')}
          </a>
          <a href="/" className="listItem">
            <MdPolicy className="iconFooter" />
            {t('store-policy')}
          </a>
          <a href="/" className="listItem">
            <MdPayment className="iconFooter" />
            {t('payment-methods')}
          </a>
        </Col>
        <Col span={6}>
          <p className="title">{t('socials')}</p>
          <a href="https://www.facebook.com/wf.nguyen2k/" className="listItem">
            <BsFacebook className="iconFooter" />
            Facebook
          </a>
          <a href="/" className="listItem">
            <BsTwitter className="iconFooter" />
            Twitter
          </a>
          <a href="/" className="listItem">
            <FaInstagramSquare className="iconFooter" />
            Instagram
          </a>
          <a href="/" className="listItem">
            <BsPinterest className="iconFooter" />
            Pinterest
          </a>
        </Col>
        <Col span={6}>
          <p className="title">{t('be-the-first-to-know')}</p>
          <a href="/" className="listItem">
            {t('sign-up-for-our-newsletter')}
          </a>
        </Col>
      </Row>
      <div className="lastContent">
        <p>© 2023 by BINK. Publishers. {t('proudly-created-with-wix.com')}</p>
        <BsArrowUpCircle className="backtopIcon" onClick={handleBackTop} />
      </div>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackColor};
  color: ${({ theme }) => theme.textLight};
  padding: 75px 0;
  .desc {
    margin: 0 auto;
    width: 60%;
  }
  .title {
    margin-bottom: 35px;
    font-size: 20px;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-weight: bold;
    text-align: left !important;
  }
  a {
    display: block;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.textLight};
  }

  .lastContent {
    display: flex;
    justify-content: space-between;
    margin: 30px auto 0;
    align-items: center;
    width: 60%;
    p {
      color: ${({ theme }) => theme.textLight};
    }

    .backtopIcon {
      font-size: 25px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .iconFooter {
    font-size: 16px;
    margin-right: 7px;
    transform: translateY(-2px);
  }
`;
