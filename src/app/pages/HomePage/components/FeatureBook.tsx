import styled from 'styled-components';
import Slider from 'react-slick';
import BookItem from '../../../components/BookItem/BookItem';
import { Button, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeManager } from '../slice/selectors';
import { useEffect } from 'react';
import { useHomeManagerSlice } from '../slice';

const FeatureBook = () => {
  const dispatch = useDispatch();
  const { actions } = useHomeManagerSlice();
  const { listHotProduct, listNewProduct, loadingListHot, loadingListNew } =
    useSelector(selectHomeManager);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: 'bestSellerBookSlider',
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: 'bestSellerBookSlider2',
  };

  const { t } = useTranslation();
  useEffect(() => {
    dispatch(
      actions.getListHotProduct({
        key: 'filter',
        value: 'hot',
        page: 0,
        size: 10,
      }),
    );
    dispatch(
      actions.getListNewProduct({
        key: 'filter',
        value: 'new',
        page: 0,
        size: 10,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <div className="bestSellerBook">
        <div className="title">
          <h3>BINK. Publishers</h3>
          <h2>BEST SELLERS</h2>
        </div>
        <Spin spinning={loadingListHot}>
          <Slider {...settings}>
            {listHotProduct?.map((d: any, i) => (
              <BookItem
                name={d?.title}
                key={i}
                img={d?.images[0]?.link}
                price={d?.price}
                type="dark"
                id={d?.id}
              />
            ))}
          </Slider>
        </Spin>
      </div>
      <div className="rcmBook">
        <div className="horizontalLine">hihi</div>
        <div className="title">
          <h3>{t('this-month')}</h3>
          <h2>{t('recommended-books')}</h2>
        </div>
        <div className="sliderRcmBook">
          <Spin spinning={loadingListNew}>
            <Slider {...settings2}>
              {listNewProduct?.map((d: any, i) => (
                <BookItem
                  name={d?.title}
                  key={i}
                  img={d?.images[0]?.link}
                  price={d?.price}
                  type="dark"
                  id={d?.id}
                />
              ))}
            </Slider>
          </Spin>
        </div>
      </div>
      <div className="lastContent">
        <h1>{t('there-are-no-such-thing-as-too-many-books')}</h1>
        <Button>{t('read-our-story')}</Button>
      </div>
    </Wrapper>
  );
};

export default FeatureBook;

const Wrapper = styled.div`
  background-color: black;
  margin-top: 400px;
  margin-left: 50px;
  margin-right: 50px;
  position: relative;

  .bestSellerBook {
    position: absolute;
    width: 100%;
    top: -27%;

    .title {
      text-align: center;
      margin: 150px 0 50px;

      h3 {
        font-size: 20px;
        font-family: ${({ theme }) => theme.secondaryFont};
        font-weight: bold;
      }

      h2 {
        font-size: 47px;
        font-weight: bold;
      }
    }

    .bestSellerBookSlider {
      width: 90%;
      margin: 0 auto;

      .slick-list {
        width: 100%;
      }
    }

    .slick-arrow {
      background-color: ${({ theme }) => theme.blackColor};
      transform: all 0.25s linear;
      border-radius: 50%;
      position: unset;
    }

    .slick-slider {
      display: flex;
      align-items: center;
    }

    .slick-prev {
      margin-right: 10px;
    }
    .slick-next {
      margin-left: 10px;
    }
  }

  .rcmBook {
    .horizontalLine {
      padding-top: 80px;
      width: 100px;
      height: 2px;
      background-color: transparent;
      margin: 0 auto 315px !important;
    }
    .title {
      text-align: center;
      padding: 20px;
      position: relative;

      h3 {
        font-size: 20px;
        color: ${({ theme }) => theme.textLight};
        font-family: ${({ theme }) => theme.secondaryFont};
        font-weight: bold;
      }

      h2 {
        font-size: 47px;
        font-weight: bold;
        color: ${({ theme }) => theme.textLight};
        margin-bottom: 0;
        text-transform: uppercase;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 1px;
        background-color: ${({ theme }) => theme.textLight};
        top: -10%;
        left: 50%;
        transform: translateX(-50%);
      }

      &::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 1px;
        background-color: ${({ theme }) => theme.textLight};
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .sliderRcmBook {
    width: 85%;
    margin: 100px auto;
  }

  .lastContent {
    text-align: center;
    padding-bottom: 150px;
    h1 {
      color: ${({ theme }) => theme.textLight};
      font-size: 70px;
      margin-bottom: 5px;
      font-family: ${({ theme }) => theme.secondaryFont};
      text-transform: uppercase;
      width: 35%;
      margin: 0 auto;
    }

    .ant-btn {
      color: ${({ theme }) => theme.textLight};
      background-color: ${({ theme }) => theme.blackColor};
      border: 2px solid ${({ theme }) => theme.textLight};
      font-size: 18px;
      width: auto;
      height: auto;
      margin-top: 20px;
      transition: all 0.25s linear;

      &:hover {
        color: ${({ theme }) => theme.blackColor};
        background-color: ${({ theme }) => theme.textLight};
      }
    }
  }
`;
