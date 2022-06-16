import Slider from 'react-slick';
import styled from 'styled-components';

import { DataImgMainSlider } from './data';
import MainSliderContent from './MainSliderContent';

const MainSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {DataImgMainSlider.map((d, i) => (
          <div key={i}>
            <MainSliderContent img={d?.img}></MainSliderContent>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default MainSlider;

const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;
