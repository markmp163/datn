import { notification } from 'antd';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { themes } from 'styles/theme/themes';

export const NotificationSuccess = (message: string) => {
  notification.open({
    message: (
      <span style={{ color: themes.light.greenDark }}>
        <BsFillCheckCircleFill
          fontSize={16}
          color={themes.light.greenDark}
          style={{ transform: 'translateY(-2px)' }}
        />{' '}
        Success
      </span>
    ),
    closeIcon: <AiOutlineClose style={{ color: themes.light.greenDark }} />,
    description: message || 'Success.',
    placement: 'topRight',
    style: {
      backgroundColor: themes.light.greenBlur,
    },
  });
};

export const NotificationError = (message: string) => {
  notification.open({
    message: (
      <span style={{ color: themes.light.redDark }}>
        <MdError
          color="red"
          style={{ transform: 'translateY(-2px)' }}
          fontSize={16}
        />{' '}
        Error
      </span>
    ),
    closeIcon: <AiOutlineClose style={{ color: themes.light.redDark }} />,
    description: message || 'Error.',
    placement: 'topRight',
    style: {
      backgroundColor: themes.light.redBlur,
      color: themes.light.redDark,
    },
  });
};
