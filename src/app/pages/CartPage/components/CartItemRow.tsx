import { Button, Col, Image, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authService } from 'services/authServices';
import styled from 'styled-components';
import { useCartManagerSlice } from '../slice';

const CartItemRow = props => {
  const { img, title, price, quantity, id } = props;
  const dispatch = useDispatch();
  const { actions } = useCartManagerSlice();

  const handleRemoveProduct = () => {
    if (authService.getAccessToken()) {
      dispatch(
        actions.removeProduct({
          productId: id,
          quantity: 1,
        }),
      );
    } else {
      //LOCAL
      let cart = JSON.parse(localStorage.getItem('cart') as never);
      if (quantity === 1) {
        localStorage.setItem(
          'cart',
          JSON.stringify(cart?.filter(i => i?.id !== id)),
        );
        dispatch(
          actions.setLocalCart(
            JSON.parse(localStorage.getItem('cart') as never),
          ),
        );
      } else {
        let index = cart?.findIndex(i => i?.id === id);
        let item = cart?.find(i => i?.id === id);
        let newItem = { ...item, quantity: item?.quantity - 1 };
        cart?.splice(index, 1, newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(
          actions.setLocalCart(
            JSON.parse(localStorage.getItem('cart') as never),
          ),
        );
      }
    }
  };

  const handleAddProduct = () => {
    if (authService.getAccessToken()) {
      dispatch(
        actions.addNewProduct({
          productId: id,
          quantity: 1,
        }),
      );
    } else {
      let cart = JSON.parse(localStorage.getItem('cart') as never);
      let index = cart?.findIndex(i => i?.id === id);
      let item = cart?.find(i => i?.id === id);
      let newItem = { ...item, quantity: item?.quantity + 1 };
      cart?.splice(index, 1, newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(
        actions.setLocalCart(JSON.parse(localStorage.getItem('cart') as never)),
      );
    }
  };

  const handleRemoveAllProducts = () => {
    if (authService.getAccessToken()) {
      dispatch(
        actions.removeProduct({
          productId: id,
          quantity: quantity,
        }),
      );
    } else {
      //LOCAL
      let cart = JSON.parse(localStorage.getItem('cart') as never);
      localStorage.setItem(
        'cart',
        JSON.stringify(cart?.filter(i => i?.id !== id)),
      );
      dispatch(
        actions.setLocalCart(JSON.parse(localStorage.getItem('cart') as never)),
      );
    }
  };

  return (
    <Wrapper className="itemCartRow">
      <Col span={4} className="colImg">
        <Image src={img} className="imgProduct" />
      </Col>
      <Col span={12} className="colDesc">
        <Link to={`/product/${id}`}>
          <p className="titleDesc">{title}</p>
        </Link>
        <p>$ {price}</p>
      </Col>
      <Col span={4} className="colQuantity">
        <div className="changeQuantity">
          <Button type="link" onClick={handleRemoveProduct}>
            -
          </Button>
          <span>{quantity}</span>
          <Button type="link" onClick={handleAddProduct}>
            +
          </Button>
        </div>
      </Col>
      <Col span={4} className="colTotal">
        <span>$ {price * quantity}</span>
        <Button
          type="link"
          className="btnDelete"
          onClick={handleRemoveAllProducts}
        >
          X
        </Button>
      </Col>
    </Wrapper>
  );
};

export default CartItemRow;

const Wrapper = styled(Row)`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.blackColorBlur};
  .colImg {
    padding: 10px;
    background-color: ${({ theme }) => theme.brightGrayColor};
    border-radius: 3px;

    .ant-image {
      width: 100%;
      height: 122.72px;
    }

    .imgProduct {
      height: 100%;
      object-fit: contain;
    }
  }

  .colDesc {
    padding: 20px;
    font-weight: lighter;
    .titleDesc {
      font-weight: bold;
      color: ${({ theme }) => theme.blackColor};

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .colQuantity {
    padding-top: 20px;
    .changeQuantity {
      display: inline-block;
      border: 1px solid ${({ theme }) => theme.blackColor};
      button {
        font-size: 20px;
        height: auto;
        padding: 0 15px;
        color: ${({ theme }) => theme.blackColor};
      }
    }
  }

  .colTotal {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 20px;

    .btnDelete {
      color: ${({ theme }) => theme.textLight};
      background-color: ${({ theme }) => theme.blackColor};
      font-weight: bold;
      padding: 5px 10px;
      margin-right: 10px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
