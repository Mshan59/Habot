import React from 'react';
import './workBox.css';

const Box = ({ imgSrc, text, index }) => (
  <div className={`box d-flex flex-column ${index % 2 === 0 ? 'alternate-background' : ''}`}>
    <img className="my-2" src={imgSrc} alt="" />
    <p>{text}</p>
  </div>
);

const WorkBox = ({ data }) => {
  const firstRow = data.slice(0, 3);
  const secondRow = data.slice(3);

  return (
    <div className="workbox container">
      <h3>How it Works?</h3>
      <p className="col-md-8 my-4">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="col-md-8 d-flex">
        {firstRow.map((box, index) => (
          <Box key={index} imgSrc={box.imgSrc} text={box.text} index={index} />
        ))}
      </div>
      <div className="col-md-8 d-flex">
        {secondRow.map((box, index) => (
          <Box key={index + 3} imgSrc={box.imgSrc} text={box.text} index={index + 3} />
        ))}
      </div>
    </div>
  );
};

export default WorkBox;
