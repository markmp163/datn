import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
  }

  .ant-input:focus{
    box-shadow: none !important;
  }

  .ant-input-password:focus{
    box-shadow: none !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow:  0 0 0 30px white inset !important;
  }

  .anticon-loading{
    transform: translateY(-5%);
  }

  .ant-input-affix-wrapper-focused{
    box-shadow: none !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    z-index: 999;
  }

  .ant-pagination-item-link:hover{
    color: ${({ theme }) => theme.blackColor} !important;
    border-color: ${({ theme }) => theme.blackColor} !important;
  }

  
  .ant-pagination-item-active a{
    color: black !important;
  }

  .ant-pagination-item{
    color: black !important;
    border-color: ${({ theme }) => theme.blackColorBlur} !important;
    transition: all .25s linear;
  }

  .ant-pagination-item:hover{

    border-color: ${({ theme }) => theme.blackColor} !important;
  }
  .ant-pagination-item:hover a{
    color: ${({ theme }) => theme.blackColor} !important;
  }

   .ant-pagination-item-active{
    border: 1px solid ${({ theme }) => theme.blackColor} !important;
  }

  .ant-spin-dot-spin i {
    background-color: ${({ theme }) => theme.blackColor};
  }

  .ant-pagination-options:hover{
    .ant-select-selector{
      border:1px solid ${({ theme }) => theme.blackColor} !important;
    }
  }

  .ant-select{
      box-shadow: none !important;
      /* border:1px solid ${({ theme }) => theme.blackColor} !important; */
  }

  .ant-select-selector{
    box-shadow: none !important;
      border:1px solid ${({ theme }) => theme.grayColor} !important;
    
  }


  .ant-pagination-options:focus{
    box-shadow: none !important;
  }

  .ant-input-number {
    &:hover {
      border: 1px solid ${({ theme }) => theme.blackColor} !important;
    }
    
  }
  .ant-input-number-handler-up-inner{
    color: ${({ theme }) => theme.blackColor} !important;
  }
  .ant-input-number-handler-down-inner{
    color: ${({ theme }) => theme.blackColor} !important;
  }
  .ant-input-number-focused {
    box-shadow: none !important;
    border: 1px solid ${({ theme }) => theme.blackColor} !important;
  }

  .ant-image-mask-info{
    color: transparent;
    display: flex;
    flex-direction: column;
  }
  .ant-image-mask-info .anticon-eye{
    color: ${({ theme }) => theme.textLight};
    font-size: 25px;
    margin-top: 10px;
  }

  .ant-btn::after{
    display: none;
  }

  .ant-pagination-item-link-icon{
    color: black !important;
  }
`;
