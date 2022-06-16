import { Button, Col, Empty, Form, Input, Row, Spin } from 'antd';
import { isEmpty } from 'app/components/common/common';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from 'services/authServices';
import styled from 'styled-components';
import CartItemRow from './components/CartItemRow';
import { useCartManagerSlice } from './slice';
import { selectCartManager } from './slice/selectors';

const CartPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { actions } = useCartManagerSlice();
  const [form] = Form.useForm();
  const { data, loading, loadingBtnPay, userInfo, localCart } =
    useSelector(selectCartManager);

  const onFinish = value => {
    console.log(value);
  };

  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  useEffect(() => {
    if (authService.getAccessToken()) {
      dispatch(actions.getListCart(true));
      dispatch(actions.getUserInfo(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!authService.getAccessToken()) {
      dispatch(
        actions.setLocalCart(JSON.parse(localStorage.getItem('cart') as never)),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('cart')]);
  return (
    <Wrapper>
      <Helmet>
        <title>{t('cart')}</title>
      </Helmet>
      <NavBar />
      <div className="content">
        <Spin spinning={loading}>
          <h3 className="title">{t('my-cart')}</h3>
          {authService.getAccessToken() && !isEmpty(data) && (
            <div className="listProduct">
              {data?.orderItems?.map((item, i) => (
                <CartItemRow
                  img={item?.product?.product_images[0]?.imageUrl}
                  price={item?.product?.price}
                  quantity={item?.quantity}
                  title={item?.product?.title}
                  id={item?.product?.id}
                  key={i}
                />
              ))}
              {data?.length === 0 && (
                <Empty description={'Không có sản phẩm.'} />
              )}
            </div>
          )}

          {!authService.getAccessToken() && (
            <div className="listProduct">
              {localCart?.map((item, i) => (
                <CartItemRow
                  img={item?.images[0]?.link}
                  price={item?.price}
                  quantity={item?.quantity}
                  title={item?.title}
                  id={item?.id}
                  key={i}
                />
              ))}
              {localCart?.length === 0 && (
                <Empty
                  description={'Không có sản phẩm.'}
                  style={{ marginBottom: '10px' }}
                />
              )}
            </div>
          )}

          <Form onFinish={onFinish} form={form}>
            <Row className="info">
              <Col span={6}>
                <h3 className="title titleOrderSumary">{t('order-summary')}</h3>
                <div className="orderSumaryContent">
                  <div className="subTotal">
                    <p>{t('subtotal')}</p>
                    <p>
                      ${' '}
                      {authService?.getAccessToken()
                        ? data?.totalPrice
                        : JSON.parse(
                            localStorage.getItem('cart') as never,
                          )?.reduce(
                            (previousValue, currentValue) =>
                              previousValue +
                              currentValue?.price * currentValue?.quantity,
                            0,
                          )}
                    </p>
                  </div>
                  <div className="transport">
                    <p>{t('transport-fee')}</p>
                    <p>$5</p>
                  </div>
                </div>
                <div className="total">
                  <h2>{t('total')}</h2>
                  <h2>
                    ${' '}
                    {authService?.getAccessToken()
                      ? data?.totalPrice + 5
                      : JSON.parse(
                          localStorage.getItem('cart') as never,
                        )?.reduce(
                          (previousValue, currentValue) =>
                            previousValue +
                            currentValue?.price * currentValue?.quantity,
                          0,
                        ) + 5}
                  </h2>
                </div>
                <Button
                  type="link"
                  className="btnCheckout"
                  htmlType="submit"
                  loading={loadingBtnPay}
                >
                  {t('check-out')}
                </Button>
              </Col>
              <Col span={18}>
                <Row>
                  <Col span={24} className="divTilteInfo">
                    <h2 className="title">{t('type-your-info')}</h2>
                  </Col>
                  <Col className="firstName" span={8}>
                    <p className="titleInfo">{t('first-name')}</p>
                    <Form.Item
                      name="firstName"
                      initialValue={userInfo?.firstName}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your firstName!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col className="lastName" span={8}>
                    <p className="titleInfo">{t('last-name')}</p>
                    <Form.Item
                      name="lastName"
                      initialValue={userInfo?.lastName}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your lastName!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col className="phone" span={8}>
                    <p className="titleInfo">{t('tel')}</p>
                    <Form.Item
                      initialValue={userInfo?.phone}
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phonenumber!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24} className="address">
                    <p className="titleInfo">{t('address')}</p>
                    <Form.Item
                      name="address"
                      initialValue={userInfo?.address}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your address!',
                        },
                      ]}
                    >
                      <Input.TextArea style={{ height: '98px' }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Spin>
      </div>

      <Footer />
    </Wrapper>
  );
};

export default CartPage;

const Wrapper = styled.div`
  .content {
    display: block;
    width: 60%;
    margin: 70px auto 100px;
    .title {
      font-weight: bold;
      font-family: ${({ theme }) => theme.secondaryFont};
      font-size: 25px;
    }
  }

  .listProduct {
    border-top: 1px solid ${({ theme }) => theme.blackColor};
    border-bottom: 1px solid ${({ theme }) => theme.blackColor};
    padding-top: 15px;
    margin-top: 10px;
    max-height: 70vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.blackColorBlur};
    }
    .itemCartRow:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }

  .orderSumaryContent {
    margin-right: 30px;
    border-top: 1px solid ${({ theme }) => theme.blackColor};
    border-bottom: 1px solid ${({ theme }) => theme.blackColor};

    .subTotal,
    .transport {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      margin: 15px 0;

      p {
        margin: 0;

        &:first-child {
          font-weight: bold;
        }
      }
    }
  }

  .total {
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 30px;
    font-family: ${({ theme }) => theme.secondaryFont};

    h2 {
      font-weight: bold;
    }
  }

  .btnCheckout {
    margin-top: 30px;
    margin-right: 30px;
    width: calc(100% - 30px);
    border: 2px solid ${({ theme }) => theme.blackColor};
    border-radius: 0;
    font-size: 16px;
    height: auto;
    color: ${({ theme }) => theme.blackColor};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.textLight};
      background-color: ${({ theme }) => theme.blackColor};
    }
  }

  .info {
    margin-top: 50px;

    .ant-input {
      &:hover,
      &:focus {
        border-color: black;
      }
    }
    .titleInfo {
      font-weight: bold;
    }
    .firstName {
      margin-top: 26px;
      padding-right: 15px;
    }

    .phone {
      margin-top: 26px;
    }
    .lastName {
      margin-top: 26px;
      padding-right: 15px;
    }

    .address {
      margin-top: 20px;
    }
  }
  .divTilteInfo {
    border-bottom: 1px solid black;
  }
`;
