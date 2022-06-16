import styled from 'styled-components';

export const Wrapper = styled.div`
  .contentLeft {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      font-size: 40px;
    }

    .formLogin {
      width: 400px;
    }
    .ant-form-item {
      display: flex;
      flex-direction: column;

      .ant-form-item-label {
        font-weight: bold;
        label {
          font-size: 16px;
        }
      }
    }

    .ant-input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.blackColorBlur};
      height: 40px;
    }

    .input-password {
      position: relative;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.blackColorBlur};
      padding: 0;
      input {
        padding: 10px;
        border: none;
        width: 100%;
      }
    }

    .ant-input-suffix {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: 10px;
      transform: translateY(-50%);
    }

    .btn-group {
      width: 100%;
      margin-top: 20px;

      button {
        width: 100%;
        font-weight: bold;
        height: 40px;
        border: 2px solid ${({ theme }) => theme.blackColor};
        transition: all 0.25s linear;
      }
      .btn__login {
        color: ${({ theme }) => theme.blackColor};

        &:hover {
          color: ${({ theme }) => theme.textLight};
          background-color: ${({ theme }) => theme.blackColor};
        }
      }

      .sign-up-link {
        text-align: center;
        margin-top: 20px;

        a {
          color: ${({ theme }) => theme.goldColor};
        }
      }
    }
  }

  .contentRight {
    height: 100vh;
    background-color: ${({ theme }) => theme.blackColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 60px;
    h2,
    p {
      color: ${({ theme }) => theme.textLight};
      text-align: left;
    }
    h1 {
      color: ${({ theme }) => theme.goldColor};

      text-transform: uppercase;
      font-size: 35px;
    }
    .footer {
      margin-top: 60px;
      font-size: 12px;
      p {
        margin-bottom: 2px;
      }
    }
  }
`;
