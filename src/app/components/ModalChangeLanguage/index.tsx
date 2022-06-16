import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHomeManagerSlice } from '../../pages/HomePage/slice';
import { selectHomeManager } from '../../pages/HomePage/slice/selectors';
import { PlagImg } from '../../pages/HomePage/components/data';

const ModalChangeLanguage = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useHomeManagerSlice();

  const { showModalChangeLanguage } = useSelector(selectHomeManager);

  const handleCloseModalChangeLanguage = () => {
    dispatch(actions.setShowModalChangeLanguage(false));
  };

  return (
    <ModalAnt
      title={t('change-language')}
      visible={showModalChangeLanguage}
      footer={null}
      onCancel={handleCloseModalChangeLanguage}
    >
      <Button
        onClick={() => {
          i18n.changeLanguage('vn');
        }}
        type={i18n.language === 'vn' ? 'primary' : 'link'}
      >
        <img className="plag" src={PlagImg.VnPlag} alt="VN Plag" />
        Tiếng Việt
      </Button>
      <Button
        type={i18n.language === 'en' ? 'primary' : 'link'}
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        <img className="plag" src={PlagImg.EnPlag} alt="EN Plag" />
        English
      </Button>
    </ModalAnt>
  );
};

export default ModalChangeLanguage;

const ModalAnt = styled(Modal)`
  .ant-modal-close-x {
    transform: translateY(-5px);
  }

  .ant-modal-body {
    button {
      margin-right: 20px;
      color: black;
      border: 1px solid black;

      .plag {
        width: 30px;
        height: 20px;
        margin-right: 10px;
      }

      &:hover,
      &:focus {
        border-color: black;
        color: black;
        opacity: 0.8;
      }

      &::after {
        display: none;
      }
    }

    .ant-btn-primary {
      background-color: black;
      color: white;

      &:hover {
        color: white;
      }
    }
  }
`;
