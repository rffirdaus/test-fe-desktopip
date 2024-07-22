import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // You can use any icon library

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      <FaChevronRight style={{ color: 'black', fontSize: '24px' }} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', left: '10px' }}
      onClick={onClick}
    >
      <FaChevronLeft style={{ color: 'black', fontSize: '24px' }} />
    </div>
  );
};

export { NextArrow, PrevArrow };