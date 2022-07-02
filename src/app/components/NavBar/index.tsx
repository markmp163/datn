import { Button, Menu, Popover } from 'antd';
import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import Images from './assets/imgs';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { RiListUnordered } from 'react-icons/ri';
import { authService } from 'services/authServices';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHomeManagerSlice } from 'app/pages/HomePage/slice';
import { FaGlobeAsia, FaUser } from 'react-icons/fa';
import ModalChangeLanguage from '../ModalChangeLanguage';

export function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useHomeManagerSlice();
  const menuItem = [
    {
      text: t('home'),
      link: '/',
    },
    {
      text: t('product'),
      link: '/product',
    },
    {
      text: t('about'),
      link: '/about',
    },
    {
      text: t('contact'),
      link: '/contact',
    },
    {
      text: t('cart'),
      link: '/cart',
    },
  ];

  const handleClickBtnChangeLanguage = () => {
    dispatch(actions.setShowModalChangeLanguage(true));
  };

  const handleLogout = () => {
    authService.removeAccessToken();
    authService.removeUsername();
    navigate('/login');
  };
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={Images.logo} alt="Logo" className="logo__img" />
        <div className="logo__name">
          <h4>Book.</h4>
          <h4>Store</h4>
        </div>
      </Link>
      <div className="navbar">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['/' + pathname.split('/')[1]]}
          items={menuItem?.map(item => {
            return {
              key: item?.link,
              label: <Link to={item?.link}>{item?.text}</Link>,
            };
          })}
        />
        <Popover
          content={
            <PopoverContent>
              {authService.getAccessToken() && authService.getUsername() ? (
                <div>
                  <Button type="link" className="btn__options">
                    <Link to="/profile">
                      <FaUser className="iconGlobal" />
                      {authService.getUsername()}
                    </Link>
                  </Button>
                  <Button type="link" className="btn__options">
                    <Link to="/orders">
                      <RiListUnordered className="iconGlobal" />
                      {t('orders')}
                    </Link>
                  </Button>
                  <Button
                    type="link"
                    className="btn__options"
                    onClick={handleClickBtnChangeLanguage}
                  >
                    <FaGlobeAsia className="iconGlobal" />
                    {t('change-language')}
                  </Button>
                  <p className="btn__logout" onClick={handleLogout}>
                    <AiOutlineLogout className="icon" />
                    <span>Logout</span>
                  </p>
                </div>
              ) : (
                <div>
                  <Button
                    type="link"
                    className="btn__options"
                    onClick={handleClickBtnChangeLanguage}
                  >
                    <FaGlobeAsia className="iconGlobal" />
                    {t('change-language')}
                  </Button>
                  <Link to="/login" className="btn__login">
                    <AiOutlineLogin className="icon" /> <span>Login</span>
                  </Link>
                </div>
              )}
            </PopoverContent>
          }
          placement="bottomRight"
          title={null}
        >
          <BsPersonCircle className="btn_user" />
        </Popover>
      </div>
      <ModalChangeLanguage />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;

  .ant-menu {
    border-bottom: 0;
    width: 100%;

    &-item {
      opacity: 0.9 !important;
    }
  }

  .ant-menu-item-active {
    .ant-menu-title-content {
      a {
        color: ${({ theme }) => theme.blackColor};
      }
    }
    &::after {
      border-bottom: 2px solid black !important;
      opacity: 0.9 !important;
    }
  }
  .ant-menu-item-selected {
    opacity: 1 !important;
    font-weight: bold;
    .ant-menu-title-content {
      a {
        color: ${({ theme }) => theme.blackColor};
      }
    }
    &::after {
      border-bottom: 2px solid black !important;
    }
  }
  .logo {
    display: flex;
    &__img {
      height: 60px;
    }
    align-items: center;

    &__name {
      margin-left: 20px;
      display: flex;
      text-transform: uppercase;
      border: 2px solid ${({ theme }) => theme.borderBlack};
      h4 {
        padding: 3px 10px;
        margin-bottom: 0;

        &:first-child {
          color: ${({ theme }) => theme.textLight};
          background-color: ${({ theme }) => theme.blackColor};
        }

        &:last-child {
          font-family: ${({ theme }) => theme.secondaryFont};
          font-weight: bold;
          font-size: 16px;
          transition: all 0.25s linear;

          &:hover {
            color: ${({ theme }) => theme.textLight};
            background-color: ${({ theme }) => theme.blackColor};
          }
        }
      }
    }
  }
  .navbar {
    width: auto;
    display: flex;
    align-items: center;
    .btn_user {
      font-size: 22px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;

const PopoverContent = styled.div`
  width: 200px;

  .btn__logout {
    color: ${({ theme }) => theme.textLight};
    border: 2px solid ${({ theme }) => theme.blackColor};
    background-color: ${({ theme }) => theme.blackColor};
    width: 100%;
    padding: 8px 0;
    border-radius: 2px;
    display: block;
    margin-bottom: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s linear;

    &:hover {
      background-color: ${({ theme }) => theme.whiteColor};
      color: ${({ theme }) => theme.blackColor};
      font-weight: bold;
    }
    .icon {
      margin-right: 2px;
      height: 18px;
    }
  }

  .btn__login {
    color: ${({ theme }) => theme.blackColor};
    border: 2px solid ${({ theme }) => theme.blackColor};
    width: 100%;
    padding: 8px 0;
    border-radius: 2px;
    display: block;
    margin-bottom: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s linear;

    &:hover {
      background-color: ${({ theme }) => theme.blackColor};
      color: ${({ theme }) => theme.textLight};
      font-weight: bold;
    }
    .icon {
      margin-right: 2px;
      height: 18px;
    }
  }

  .btn__options {
    color: ${({ theme }) => theme.blackColor};
    padding: 0;
    margin: 10px 0;
    width: 100%;
    text-align: left;

    .iconGlobal {
      font-size: 20px;
      transform: translateY(-2px);
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
