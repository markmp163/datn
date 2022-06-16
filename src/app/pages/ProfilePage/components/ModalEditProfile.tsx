import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useProfilePageManagerSlice } from '../slice';
import { selectProfilePageManager } from '../slice/selectors';

const ModalEditProfile = () => {
  const { t } = useTranslation();
  const { actions } = useProfilePageManagerSlice();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { dataProfile, loadingBtnEdit, showModalEdit } = useSelector(
    selectProfilePageManager,
  );

  const handleCloseModal = () => {
    dispatch(actions.setShowModalEdit(false));
  };

  const onFinish = value => {
    dispatch(
      actions.editProfile({
        data: {
          ...value,
          amount: 0,
          role: dataProfile?.role,
        },
        id: dataProfile?.id,
      }),
    );
  };

  useEffect(() => form.resetFields());
  return (
    <ModalAnt
      title={t('edit-profile')}
      visible={showModalEdit}
      footer={null}
      onCancel={handleCloseModal}
    >
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          initialValue={dataProfile?.firstName}
          label={t('first-name')}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          initialValue={dataProfile?.lastName}
          label={t('last-name')}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          initialValue={dataProfile?.phone}
          label={t('tel')}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          initialValue={dataProfile?.address}
          label={t('address')}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: t('this-field-is-required') }]}
          labelAlign="left"
          requiredMark="optional"
          initialValue={dataProfile?.email}
          label={t('email')}
        >
          <Input />
        </Form.Item>
        <Button htmlType="submit" loading={loadingBtnEdit}>
          {t('confirm')}
        </Button>
      </Form>
    </ModalAnt>
  );
};

export default ModalEditProfile;

const ModalAnt = styled(Modal)`
  .ant-input {
    border: none;
    border-bottom: 1px solid black;
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
