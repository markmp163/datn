import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useProfilePageManagerSlice } from '../slice';
import { selectProfilePageManager } from '../slice/selectors';

const ModalChangePass = () => {
  const { t } = useTranslation();
  const { actions } = useProfilePageManagerSlice();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { loadingBtnChangePass, showModalChangePass } = useSelector(
    selectProfilePageManager,
  );

  const handleCloseModal = () => {
    dispatch(actions.setShowModalChangePass(false));
  };

  const onFinish = value => {
    dispatch(actions.changePass(value));
  };

  useEffect(() => form.resetFields());
  return (
    <ModalAnt
      title={t('change-pass')}
      visible={showModalChangePass}
      footer={null}
      onCancel={handleCloseModal}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="oldPassword"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          label={t('old-password')}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          label={t('new-pass')}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: t('this-field-is-required') },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(t('validate-pass-mess'));
              },
            }),
          ]}
          labelAlign="left"
          requiredMark="optional"
          label={t('confirm-pass')}
        >
          <Input.Password />
        </Form.Item>
        <Button htmlType="submit" loading={loadingBtnChangePass}>
          {t('confirm')}
        </Button>
      </Form>
    </ModalAnt>
  );
};

export default ModalChangePass;

const ModalAnt = styled(Modal)`
  .ant-input-password {
    border: none;
    border-bottom: 1px solid black !important;
    border-radius: 0;
  }

  .ant-btn {
    display: block;
    margin: 30px auto 0;
    background-color: black;
    color: white;
    border-color: black;

    &:hover {
      opacity: 0.8;
    }

    &::after {
      display: none;
    }
  }
`;
