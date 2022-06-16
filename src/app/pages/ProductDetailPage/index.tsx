import { Button, Col, InputNumber, Row, Spin } from 'antd';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProductDetailManagerSlice } from './slice';
import { selectProductDetailManager } from './slice/selectors';
import { ImListNumbered, ImPriceTags } from 'react-icons/im';
import {
  AiOutlineArrowLeft,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Slider from 'react-slick';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdDescription, MdOutlineManageAccounts } from 'react-icons/md';
import { SiSellfy } from 'react-icons/si';
import { Helmet } from 'react-helmet-async';
import { authService } from 'services/authServices';
import { useTranslation } from 'react-i18next';
import { NotificationSuccess } from 'app/components/Notification';

export function ProductDetailPage() {
  const param = useParams();
  const dispatch = useDispatch();
  const { actions } = useProductDetailManagerSlice();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { loading, loadingBtnAdd, productData, quantity, showMoreDesc } =
    useSelector(selectProductDetailManager);

  const handleBack = () => {
    navigate(-1);
  };

  const handelShowMore = () => {
    dispatch(actions.setShowMoreDescription(!showMoreDesc));
  };

  const handelChangeQuantity = (value: any) => {
    if (value) {
      dispatch(actions.setQuantity(value));
    } else {
      dispatch(actions.setQuantity(0));
    }
  };

  const handleAddToCart = () => {
    if (authService.getAccessToken()) {
      dispatch(
        actions.addToCart({
          productId: Number(param?.id),
          quantity: quantity,
        }),
      );
    } else {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem(
          'cart',
          JSON.stringify([
            {
              ...productData,
              quantity: quantity,
            },
          ]),
        );
      } else {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (cart.some(c => c?.id === productData?.id)) {
          let prevProduct = cart.find(c => c?.id === productData?.id);
          let newCart = cart.filter(c => c?.id !== productData?.id);
          let newProduct = {
            ...prevProduct,
            quantity: prevProduct?.quantity + quantity,
          };
          localStorage.setItem(
            'cart',
            JSON.stringify([...newCart, newProduct]),
          );
        } else {
          localStorage.setItem(
            'cart',
            JSON.stringify([
              ...cart,
              {
                ...productData,
                quantity: quantity,
              },
            ]),
          );
        }
      }
      setTimeout(() => {
        NotificationSuccess(t('added-to-cart'));
      }, 100);
    }
  };

  useEffect(() => {
    dispatch(actions.getProduct(Number(param?.id)));

    return () => {
      dispatch(actions.setShowMoreDescription(false));
      dispatch(actions.setQuantity(1));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Helmet>
        <title>Product Detail</title>
      </Helmet>
      <NavBar />
      <Spin spinning={loading}>
        <div className="content">
          <Button onClick={handleBack} className="btnBack">
            <AiOutlineArrowLeft className="iconBack" /> {t('go-back')}
          </Button>
          <Row className="mainContent">
            <Col className="contentLeft" span={12}>
              <Slider {...settings}>
                {productData?.images?.map((item, i) => (
                  <div key={i} className="sliderItem">
                    <img
                      src={item?.link}
                      alt="Img description"
                      className="imgSlick"
                    />
                  </div>
                ))}
              </Slider>
            </Col>
            <Col className="contentRight" span={12}>
              <h2 className="itemDesc itemTitle">{productData?.title}</h2>
              <h4 className="itemDesc">
                <span className="itemDesc__title">
                  <BsFillPersonFill className="itemDesc__title__icon" />{' '}
                  {t('author')}:{' '}
                </span>
                {productData?.author}
              </h4>
              <h4 className="itemDesc">
                <span className="itemDesc__title">
                  <BiCategoryAlt className="itemDesc__title__icon" />{' '}
                  {t('category')}:{' '}
                </span>
                {productData?.category}
              </h4>
              <h4 className="itemDesc">
                <span className="itemDesc__title">
                  <ImListNumbered className="itemDesc__title__icon" />{' '}
                  {t('number-of-page')}:{' '}
                </span>
                {productData?.numberOfPage}
              </h4>
              <h4 className="itemDesc quantity">
                <span className="itemDesc__title">
                  <MdOutlineManageAccounts className="itemDesc__title__icon" />{' '}
                  {t('quantity')}:
                </span>
              </h4>{' '}
              <InputNumber
                type={'number'}
                min={1}
                value={quantity}
                onChange={handelChangeQuantity}
                className="inputQuantity"
              />
              <h4 className="itemDesc">
                <span className="itemDesc__title">
                  <ImPriceTags className="itemDesc__title__icon" /> {t('price')}
                  : ${' '}
                </span>
                {productData?.price}
              </h4>
              <Button
                className="btnAddCart"
                loading={loadingBtnAdd}
                onClick={handleAddToCart}
              >
                <AiOutlineShoppingCart className="icon-cart" />
                {t('add-to-cart')}
              </Button>
              <h4
                className="itemDesc description"
                style={
                  !showMoreDesc
                    ? {
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        wordBreak: 'break-word',
                        WebkitBoxOrient: 'vertical',
                      }
                    : {}
                }
              >
                <span className="itemDesc__title">
                  <MdDescription className="itemDesc__title__icon" />{' '}
                  {t('desc')}:{' '}
                </span>
                {productData?.longDescription}
              </h4>
              <p className="btnShowMore" onClick={handelShowMore}>
                {showMoreDesc ? (
                  <span>
                    {t('collapse')} {<AiFillCaretUp />}
                  </span>
                ) : (
                  <span>
                    {t('show-more')} {<AiFillCaretDown />}
                  </span>
                )}
              </p>
              <h4 className="itemDesc">
                <span className="itemDesc__title">
                  <SiSellfy className="itemDesc__title__icon" />{' '}
                  {t('quantity-sold')}:{' '}
                </span>
                {productData?.quantitySelled}
                <span style={{ textTransform: 'lowercase' }}>
                  {' ' + t('product')}.
                </span>
              </h4>
            </Col>
          </Row>
        </div>
      </Spin>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .content {
    width: 50%;
    margin: 0 auto;
    padding: 75px 0;

    .btnBack {
      color: ${({ theme }) => theme.blackColor};
      border: 2px solid ${({ theme }) => theme.blackColor};

      &::after {
        display: none !important;
      }

      &:hover {
        background-color: ${({ theme }) => theme.blackColor};
        color: ${({ theme }) => theme.textLight};
      }
    }

    .iconBack {
      margin-right: 10px;
      font-size: 16px;
      transform: translateY(-1px);
    }

    .mainContent {
      margin-top: 50px;
    }

    .contentLeft {
    }
    .sliderItem {
      width: 100%;
      padding: 6%;
      background-color: ${({ theme }) => theme.brightGrayColor};
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      display: block !important;
    }
    .imgSlick {
      width: 100%;
      object-fit: contain;
    }

    .contentRight {
      padding: 0 4%;

      .quantity {
        display: inline-block;
      }

      .itemDesc,
      .btnShowMore {
        margin-bottom: 20px;
        font-weight: normal;
      }

      .itemDesc__title {
        font-weight: bold;
      }
      .btnShowMore {
        cursor: pointer;
        font-weight: bold;
      }
      .description {
        text-align: justify;
        margin-bottom: 0;
      }
    }

    .itemTitle {
      font-weight: bold !important;
      font-size: 30px;
      font-family: ${({ theme }) => theme.secondaryFont};
    }
    .btnAddCart {
      width: 100%;
      font-size: 16px;
      padding: 7px 0;
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.blackColor};
      color: ${({ theme }) => theme.blackColor};
      margin-bottom: 20px;
      height: auto;

      &:hover {
        color: ${({ theme }) => theme.textLight};
        background-color: ${({ theme }) => theme.blackColor};
      }
      &::after {
        display: none;
      }

      .icon-cart {
        font-size: 22px;
        margin-right: 5px;
      }
    }

    .itemDesc__title__icon {
      font-size: 16px;
      margin-right: 5px;
      transform: translateY(-2px);
    }

    .inputQuantity {
      margin-left: 10px;
    }
  }
`;
