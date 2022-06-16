import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ComingBook = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="title">
        <h3>{t('coming-up')}</h3>
        <h1>{t('book-launch')}</h1>
      </div>
      <Row>
        <Col span={12} className="leftContent">
          <div className="intro">
            <h3>{t('introduce-the-land-of-ailoo')}</h3>
            <h4>{t('by')} Mark Walker</h4>
          </div>
          <div className="time same">
            <p>{t('when')}</p>
            <p>Jul 12, 2023, 7:00 PM</p>
          </div>
          <div className="where same">
            <p>{t('where')}</p>
            <p>500 Terry A Francois Blvd, </p>
            <p>500 Terry A Francois Blvd, San Francisco, CA 94158, USA</p>
          </div>
          <Button className="btnRSVP">{t('rsvp-now')}</Button>
        </Col>
        <Col span={12} className="rightContent">
          <img
            src="https://static.wixstatic.com/media/ea71bb_d13f876cc66b40daae4567147d7a2cf6~mv2_d_2437_3106_s_4_2.jpg/v1/fill/w_1011,h_1288,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea71bb_d13f876cc66b40daae4567147d7a2cf6~mv2_d_2437_3106_s_4_2.jpg"
            alt="New book"
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ComingBook;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 80px 0;

  .title {
    text-align: center;

    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 50px;
      font-family: ${({ theme }) => theme.secondaryFont};
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .leftContent {
    font-size: 16px;

    .btnRSVP {
      text-transform: uppercase;
    }
    .intro {
      h3 {
        font-size: 25px;
        font-family: ${({ theme }) => theme.secondaryFont};
        font-weight: bold;
        margin-bottom: 30px;
      }

      margin-bottom: 50px;
    }

    .same {
      p:first-child {
        position: relative;
        font-family: ${({ theme }) => theme.secondaryFont};
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 10px;

        &::before {
          position: absolute;
          content: '';
          height: 1px;
          width: 35px;
          background-color: ${({ theme }) => theme.blackColorBlur};
          bottom: 0;
        }
      }
    }

    .where {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .ant-btn {
      font-size: 18px;
      width: auto;
      height: auto;
      padding: 10px 30px;
      border-radius: 0;
      color: ${({ theme }) => theme.blackColor};
      border: 3px solid ${({ theme }) => theme.blackColor};

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .rightContent {
    img {
      width: 100%;
      border: 15px solid ${({ theme }) => theme.blackColor};
    }
  }
`;
