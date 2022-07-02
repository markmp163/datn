import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Helmet>
        <title style={{ textTransform: 'capitalize' }}>
          {t('our-title-about')} {t('story-title-about')}
        </title>
      </Helmet>
      <NavBar />
      <div className="title">
        <h3>{t('our-title-about')}</h3>
        <h1>{t('story-title-about')}</h1>
      </div>
      <div className="content">
        <img
          src="https://static.wixstatic.com/media/ea71bb_33bc63ef912b4567b3b05fa47518bbe9~mv2_d_5998_3993_s_4_2.jpg/v1/crop/x_11,y_0,w_5977,h_3993/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_33bc63ef912b4567b3b05fa47518bbe9~mv2_d_5998_3993_s_4_2.jpg"
          alt=""
          className="mainImg"
        />
        <div className="desc">
          {t('text-about1')}
          <p>{t('text-about2')}</p>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled.div`
  .title {
    padding-top: 60px;
    text-align: center;
    text-transform: uppercase;
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

    .mainImg {
      position: absolute;
      top: -10%;
      width: 60%;
      object-fit: cover;
      left: 50%;
      transform: translateX(-50%);
    }

    .desc {
      p {
        font-size: 16px;
        line-height: 2;
        margin-top: 15px;
      }
      position: absolute;
      width: 500px;
      height: auto;
      padding: 50px;
      font-size: 16px;
      line-height: 2;
      background-color: ${({ theme }) => theme.textLight};
      border: 15px solid ${({ theme }) => theme.blackColor};
      top: 20%;
      left: 10%;
    }
  }
`;
