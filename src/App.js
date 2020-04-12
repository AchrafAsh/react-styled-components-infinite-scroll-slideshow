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
    `repeat(${props.length}, ${150 / props.length})`};
  .gatsby-image-wrapper {
    place-self: center center;
    width: 15vw;
  }
  animation: ${(props) =>
    props.right
      ? 'bannerMoveRight 20s linear infinite'
      : 'bannerMoveLeft 20s linear infinite'};
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
  height: 200px;
  width: auto;
  place-self: center center;
`;

function App() {
  const imageList = [
    {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png',
    },
    {
      url:
        'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
    },
    { url: 'https://avatars3.githubusercontent.com/u/12551863?s=400&v=4' },
  ];

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SlideShowWrapper length={imageList.length} speed={1}>
        <InfiniteSlideShow length={imageList.length} right={false}>
          {imageList &&
            imageList.map((image, index) => (
              <Image src={image.url} col={index + 1} key={index} />
            ))}
        </InfiniteSlideShow>
        <InfiniteSlideShow length={imageList.length} right={true}>
          {imageList &&
            imageList.map((image, index) => (
              <Image src={image.url} col={index + 1} key={index} />
            ))}
        </InfiniteSlideShow>
      </SlideShowWrapper>
    </div>
  );
}

export default App;
