import React from 'react';
// import React, { useState } from 'react';
import './index.css';

const Header = () => {
  // const [count, setCount] = useState(0);
  const count = new Date().getTime();
  return (
    <div
      className='head-box'
      onClick={() => {
        console.log(count);
        // setCount(count + 1);
      }}
    >
      <div className='name'>Yrobot</div>
      <div className='count'>{count}</div>
    </div>
  );
};
export default Header;
