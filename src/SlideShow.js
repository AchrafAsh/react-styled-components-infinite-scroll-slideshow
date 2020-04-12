import React from 'react';
import styled from 'styled-components';

const SlideShowWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

const InfiniteSlideShow = styled.div`
  width: 150vw;
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.length}, ${150 / props.length}vw)`};
  animation: ${(props) =>
    props.right
      ? `bannerMoveRight ${100 / props.speed}s linear infinite`
      : `bannerMoveLeft ${100 / props.speed}s linear infinite`};
  @keyframes bannerMoveLeft {
    0% {
      transform: translateX(0);
    }
    49% {
      transform: translateX(-150vw);
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: translateX(-150vw);
    }
    51% {
      opacity: 0;
      transform: translateX(150vw);
    }
    52% {
      opacity: 1;
      transform: translateX(150vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes bannerMoveRight {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    49% {
      transform: translateX(-150vw);
    }
    98% {
      transform: translateX(-300vw);
      opacity: 1;
    }
    99% {
      transform: translateX(-300vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 0;
    }
  }
`;
const Image = styled.img`
  grid-row: 1;
  grid-column: ${(props) => props.col};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-width: 100%;
  place-self: center center;
`;

const SlideShow = (props) => {
  const images = props.images;
  const speed = props.speed ? props.speed : 5;
  return (
    <SlideShowWrapper length={images.length}>
      <InfiniteSlideShow length={images.length} speed={speed}>
        {images &&
          images.map((image, index) => (
            <Image
              height={props.imageHeight ? props.imageHeight : 'auto'}
              width={props.imageWidth ? props.imageWidth : 'auto'}
              src={image.url}
              col={index + 1}
              key={index}
            />
          ))}
      </InfiniteSlideShow>
      <InfiniteSlideShow length={images.length} right speed={speed}>
        {images &&
          images.map((image, index) => (
            <Image
              height={props.imageHeight ? props.imageHeight : 'auto'}
              width={props.imageWidth ? props.imageWidth : 'auto'}
              src={image.url}
              col={index + 1}
              key={index}
            />
          ))}
      </InfiniteSlideShow>
    </SlideShowWrapper>
  );
};

export default SlideShow;
