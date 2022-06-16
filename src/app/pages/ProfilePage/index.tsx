import { Button, Descriptions, Spin } from 'antd';
import Footer from 'app/components/Footer';
import { NavBar } from 'app/components/NavBar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AiFillEdit } from 'react-icons/ai';
import { BsKeyFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalChangePass from './components/ModalChangePass';
import ModalEditProfile from './components/ModalEditProfile';
import { useProfilePageManagerSlice } from './slice';
import { selectProfilePageManager } from './slice/selectors';

export function ProfilePage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { actions } = useProfilePageManagerSlice();
  const { dataProfile, loading } = useSelector(selectProfilePageManager);

  const showModalEdit = () => {
    dispatch(actions.setShowModalEdit(true));
  };

  const showModalChangePass = () => {
    dispatch(actions.setShowModalChangePass(true));
  };

  useEffect(() => {
    dispatch(actions.getProfile(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Helmet>
        <title>{t('profile')}</title>
      </Helmet>
      <NavBar />
      <div className="title">
        <h1>{t('profile')}</h1>
      </div>
      <div className="main-content">
        <Spin spinning={loading}>
          <Button
            icon={<AiFillEdit className="iconEdit" />}
            className="btnShowModalEdit"
            onClick={showModalEdit}
          >
            {t('edit-profile')}
          </Button>
          <Button
            icon={<BsKeyFill className="iconEdit" />}
            className="btnShowModalEdit"
            onClick={showModalChangePass}
          >
            {t('change-pass')}
          </Button>

          <Descriptions>
            <Descriptions.Item label={t('first-name')}>
              {dataProfile?.firstName}
            </Descriptions.Item>
            <Descriptions.Item label={t('last-name')}>
              {dataProfile?.lastName}
            </Descriptions.Item>
            <Descriptions.Item label={t('address')}>
              {dataProfile?.address}
            </Descriptions.Item>
            <Descriptions.Item label={t('username')}>
              {dataProfile?.username}
            </Descriptions.Item>
            <Descriptions.Item label={t('tel')}>
              {dataProfile?.phone}
            </Descriptions.Item>
            <Descriptions.Item label={'Email'}>
              {dataProfile?.email}
            </Descriptions.Item>
          </Descriptions>
        </Spin>
      </div>
      <Footer />
      <ModalEditProfile />
      <ModalChangePass />
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
    width: 60%;
    margin: 20px auto;
    padding-bottom: 60px;

    .ant-descriptions {
      margin-top: 12px;
    }
    .ant-spin-container {
      text-align: right;
    }
    .icon {
      font-size: 18px;
      margin-right: 10px;
    }

    .ant-descriptions-item-label {
      font-weight: bold;
    }

    .iconEdit {
      font-size: 16px;
      margin-right: 10px;
    }
    .btnChangePass {
      margin: 0 20px;
      cursor: pointer;
      transition: all 0.25s linear;
      &:hover {
        opacity: 0.8;
      }
    }

    .btnShowModalEdit {
      margin-bottom: 20px;
      margin-left: 10px;

      &:hover,
      &:focus {
        color: black;
        border-color: black;
      }
    }
  }
`;
