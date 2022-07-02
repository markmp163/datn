import { Button, Image, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { themes } from 'styles/theme/themes';

const BookItem = props => {
  const { t } = useTranslation();
  const { img, name, price, type, id } = props;
  return (
    <Wrapper>
      <div className="img">
        <Image src={img} />
      </div>
      <div className="desc">
        <Tooltip placement="top" title={name}>
          <Link
            to={`/product/${id}`}
            className="name"
            style={{
              color:
                type === 'dark'
                  ? themes.light.textLight
                  : themes.light.blackColor,
            }}
          >
            {name}
          </Link>
        </Tooltip>
        <p className="price">{price}₫</p>
      </div>
      <Button className={`btnAdd ${type === 'dark' ? 'btnDark' : 'btnLight'}`}>
        <Link to={`/product/${id}`}>{t('detail')}</Link>
      </Button>
    </Wrapper>
  );
};

export default BookItem;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: transparent;
  margin: 0 10px;
  .img {
    overflow: hidden;
    background-color: ${({ theme }) => theme.brightGrayColor};
    height: 350px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-image {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px;
    }
    img {
      height: 100%;
      object-fit: contain !important;
    }
  }

  .desc {
    margin-top: 10px;
    text-align: center;
    p {
      margin-bottom: 3px;
      font-weight: bold;
    }
    .name {
      font-weight: bold;

      min-height: 42px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
    .price {
      color: ${({ theme }) => theme.goldColor};
    }
  }
  .btnAdd {
    background-color: transparent;

    opacity: 0;
    width: 100%;
    border-radius: 0;
    margin-top: 10px;
    transition: all 0.25s linear;
  }

  .btnDark {
    border: 2px solid ${({ theme }) => theme.textLight};
    color: ${({ theme }) => theme.textLight};

    &:hover {
      background-color: ${({ theme }) => theme.textLight};
      color: ${({ theme }) => theme.blackColor};
      font-weight: bold;
    }
  }

  .btnLight {
    border: 2px solid ${({ theme }) => theme.blackColor};
    color: ${({ theme }) => theme.blackColor};

    &:hover {
      background-color: ${({ theme }) => theme.blackColor};
      color: ${({ theme }) => theme.textLight};
      font-weight: bold;
    }
  }

  &:hover {
    .btnAdd {
      opacity: 1;
    }
  }
`;
