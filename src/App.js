import React, { useState } from 'react';
import SlideShow from './SlideShow';

function App() {
  const images = [
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
    // { url: 'https://avatars3.githubusercontent.com/u/12551863?s=400&v=4' },
  ];

  const [speed, setSpeed] = useState(20);
  const [imageHeight, setImageHeight] = useState('200px');
  const [imageWidth, setImageWidth] = useState('auto');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <SlideShow
        images={images}
        speed={speed}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
      <div style={{ width: '70%' }}>
        <div>
          <label>Speed</label>
          <input
            style={{ margin: '10px' }}
            type='text'
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div>
          <label>Image height</label>
          <input
            style={{ margin: '10px' }}
            type='text'
            value={imageHeight}
            onChange={(e) => setImageHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Image width</label>
          <input
            style={{ margin: '10px' }}
            type='text'
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
