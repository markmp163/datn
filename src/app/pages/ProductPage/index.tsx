import { Col, List, Row } from 'antd';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BookItem from '../../components/BookItem/BookItem';
import Filter from './components/Filter';
import { useProductManagerSlice } from './slice';
import { selectProductManager } from './slice/selectors';

export function ProductPage() {
  const dispatch = useDispatch();
  const { actions } = useProductManagerSlice();
  const { t } = useTranslation();
  const {
    listProduct,
    params,
    listLoading,
    total,
    listCategoryChoosed,
    nameFilter,
    price,
  } = useSelector(selectProductManager);
  const showTotal = () => {
    return (
      <span>
        {t('total')}: <b>{total}</b>{' '}
        <span style={{ textTransform: 'lowercase' }}>{t('product')}</span>.
      </span>
    );
  };
  useEffect(() => {
    dispatch(
      actions.findProduct({
        ...params,
        money: price,
        name: nameFilter,
        category: listCategoryChoosed,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.page, params.size, price, nameFilter, listCategoryChoosed]);
  return (
    <Wrapper>
      <Helmet>
        <title>{t('product')}</title>
      </Helmet>
      <NavBar />
      <div className="title">
        <h3>{t('our-title-product')}</h3>
        <h1>{t('book-store-title-product')}</h1>
      </div>
      <Row className="main-content">
        <Col span={4} className="filter">
          <Filter />
        </Col>
        <Col span={20} className="listProduct">
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={listProduct}
            loading={listLoading}
            renderItem={(item: any, i) => (
              <List.Item key={i}>
                <BookItem
                  name={item?.title}
                  img={item?.images[0].link}
                  price={item?.price}
                  type="light"
                  id={item?.id}
                />
              </List.Item>
            )}
            pagination={{
              onChange: (page, size) => {
                dispatch(
                  actions.setParams({
                    page: page,
                    size: size,
                  }),
                );
              },
              total: total,
              showTotal: showTotal,
              current: params.page,
              pageSize: params.size,
              showSizeChanger: true,
              pageSizeOptions: [8, 12, 16],
            }}
          />
        </Col>
      </Row>
      <Footer />
    </Wrapper>
  );
}

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
      text-transform: uppercase;
    }
  }
  .main-content {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  .filter {
    h2 {
      position: relative;
      padding-bottom: 15px;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.blackColorBlur};
        bottom: 0;
        left: 0;
      }
    }
  }

  .listProduct {
    padding-left: 50px;
  }
`;
