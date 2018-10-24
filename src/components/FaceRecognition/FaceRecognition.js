import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box.map((each, i) => (
          <div
            key={i}
            className="bounding-box"
            style={{
              top: each.topRow,
              right: each.rightCol,
              bottom: each.bottomRow,
              left: each.leftCol
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
