import styled from 'styled-components';

const MainSliderContent = props => {
  const { img } = props;
  return (
    <Wrapper>
      <img src={img} alt="Unknow!" />
    </Wrapper>
  );
};

export default MainSliderContent;

const Wrapper = styled.div`
  max-height: 700px;
  position: relative;
  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.textLight};
    font-weight: bold;
    font-size: 50px;
    text-shadow: 2px 2px 6px ${({ theme }) => theme.blackColor};
  }
`;
