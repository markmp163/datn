import { Button, Form, Input, InputNumber, Spin } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useProductManagerSlice } from '../slice';
import { selectProductManager } from '../slice/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const { actions } = useProductManagerSlice();
  const { t } = useTranslation();
  const { listCategory, loadingCategory, listCategoryChoosed } =
    useSelector(selectProductManager);

  const handelChooseCategory = id => {
    if (!listCategoryChoosed?.includes(id)) {
      dispatch(actions.setChoosedCategory(id));
    } else {
      dispatch(actions.removeChoosedCategory(id));
    }
  };

  const filterName = value => {
    if (value?.value) {
      dispatch(actions.setNameFilter(value?.value?.toUpperCase()));
    } else {
      dispatch(actions.setNameFilter(''));
    }
  };

  const filterPrice = value => {
    dispatch(
      actions.setPriceFilter([
        value?.minPrice || Number.MIN_SAFE_INTEGER,
        value?.maxPrice || Number.MAX_SAFE_INTEGER,
      ]),
    );
  };

  useEffect(() => {
    dispatch(actions.findCategory(true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <h2 className="titleSearch">{t('search')}</h2>
      <div className="divSearch">
        <Form onFinish={filterName}>
          <Form.Item name={'value'}>
            <Input className="inputSearch" placeholder={t('search-by-name')} />
          </Form.Item>
          <Button htmlType="submit" className="btnSearch">
            {t('search')}
          </Button>
        </Form>
      </div>
      <h2>{t('category')}</h2>
      <Spin spinning={loadingCategory}>
        <div className="category">
          {listCategory?.map((c: any, i) => (
            <Button
              key={i}
              className={`btnCategory ${
                listCategoryChoosed?.includes(c?.id) && 'choosed'
              }`}
              onClick={() => handelChooseCategory(c?.id)}
            >
              {c?.name}
            </Button>
          ))}
        </div>
      </Spin>
      <h2>{t('price')}</h2>
      <div className="priceFilter">
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={filterPrice}
        >
          <Form.Item label={t('from')} labelAlign="left" name="minPrice">
            <InputNumber addonBefore="VND" min={0} />
          </Form.Item>
          <Form.Item label={t('to')} labelAlign="left" name="maxPrice">
            <InputNumber addonBefore="VND" min={0} />
          </Form.Item>
          <Button htmlType="submit" className="btnSearch">
            {t('search')}
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Filter;
const Wrapper = styled.div`
  .btnSearch {
    color: ${({ theme }) => theme.blackColor};
    border: 2px solid ${({ theme }) => theme.blackColor};
    height: auto;
    width: 100%;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.textLight};
      background-color: ${({ theme }) => theme.blackColor};
    }
  }
  .titleSearch {
    margin-bottom: 0px;
    &::after {
      display: none;
    }
  }
  .divSearch {
    margin-bottom: 50px;
    .inputSearch {
      height: 40px;
      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.blackColor};
      }
    }
  }
  .category {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-bottom: 50px;

    .btnCategory {
      width: calc(50% - 5px);
      height: auto;
      white-space: normal;
      margin: 10px 0;
      margin-left: 5px;
      color: ${({ theme }) => theme.blackColor};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.blackColor};
      }
    }

    .choosed {
      background-color: ${({ theme }) => theme.blackColor};
      color: ${({ theme }) => theme.whiteColor};
    }
  }
  .priceFilter {
    margin-top: 20px;
    .ant-input-number {
      border-radius: 0 !important;
    }
    .ant-input-number-group-addon {
      background-color: ${({ theme }) => theme.blackColor};
      color: ${({ theme }) => theme.whiteColor};
      border: 1px solid black;
    }
  }
`;
