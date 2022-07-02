import { Tabs } from 'antd';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AiFillWallet } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaBox, FaShippingFast } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useOrdersManagerSlice } from './slice';
import { selectOrdersManager } from './slice/selectors';

const OrdersPage = () => {
  const { t } = useTranslation();
  const { TabPane } = Tabs;
  const { data, loading, params } = useSelector(selectOrdersManager);
  const dispatch = useDispatch();
  const { actions } = useOrdersManagerSlice();

  const findAllOrders = params => {
    dispatch(actions.findAllOrder(params));
  };

  useEffect(() => {
    findAllOrders({ params });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.page, params?.size]);

  return (
    <Wrapper>
      <Helmet>
        <title>{t('orders')}</title>
      </Helmet>
      <NavBar />
      <div className="title">
        <h1>{t('your-orders')}</h1>
      </div>
      <div className="main-content">
        <Tabs tabPosition="left">
          <TabPane
            tab={
              <span className="titleTab">
                <AiFillWallet />
                {t('all')}
              </span>
            }
            key="1"
          ></TabPane>
          <TabPane
            tab={
              <span className="titleTab">
                <FaBox />
                {t('wait-for-confirmation')}
              </span>
            }
            key="2"
          ></TabPane>

          <TabPane
            tab={
              <span className="titleTab">
                <FaShippingFast />
                {t('shipping')}
              </span>
            }
            key="3"
          ></TabPane>

          <TabPane
            tab={
              <span className="titleTab">
                <BsFillBagCheckFill />
                {t('completed')}
              </span>
            }
            key="4"
          ></TabPane>
        </Tabs>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default OrdersPage;

const Wrapper = styled.div`
  .title {
    padding-top: 60px;
    text-align: center;

    h1 {
      font-size: 50px;
      font-family: ${({ theme }) => theme.secondaryFont};
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
  }
  .main-content {
    width: 80%;
    margin: 60px auto;
    padding-bottom: 60px;
  }

  .ant-tabs {
    &-tab-active {
      opacity: 1;
    }
    &-ink-bar {
      background-color: ${({ theme }) => theme.blackColor};
    }
  }

  .titleTab {
    font-size: 18;
    color: ${({ theme }) => theme.blackColor};
    opacity: 0.7;
    transition: all 0.25s linear;
    text-transform: uppercase;

    svg {
      font-size: 18;
      margin-right: 10px;
    }
  }
`;
