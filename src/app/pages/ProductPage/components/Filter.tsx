import { Button, Form, Input, Spin } from 'antd';
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
  const { listCategory, loadingCategory, categoryChoosed } =
    useSelector(selectProductManager);

  const handelChooseCategory = id => {
    if (categoryChoosed !== id) {
      dispatch(actions.setParams({ page: 1, size: 8 }));
      dispatch(actions.setChoosedCategory(id));
    } else {
      dispatch(actions.setChoosedCategory(0));
    }
  };

  const filterName = value => {
    if (value?.value) {
      dispatch(actions.setNameFilter(value?.value?.toUpperCase()));
    } else {
      dispatch(actions.setNameFilter(''));
    }
  };

  useEffect(() => {
    dispatch(actions.findCategory(true));

    return () => {
      dispatch(actions.setChoosedCategory(0));
      dispatch(actions.setNameFilter(''));
    };

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
                categoryChoosed === c?.id && 'choosed'
              }`}
              onClick={() => handelChooseCategory(c?.id)}
            >
              {c?.name}
            </Button>
          ))}
        </div>
      </Spin>
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
    &::after {
      display: none;
    }
    border-bottom: 1px solid ${({ theme }) => theme.blackColorBlur};
    margin-bottom: 20px;
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
