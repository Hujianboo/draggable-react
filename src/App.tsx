/*
 * @Author: hujianbo
 * @LastEditors: Hujianbo
 */
/*
 * @Author: hujianbo
 * @LastEditors: hujianbo
 */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useDraggable from './useDraggable';
function App() {
  const {target,draggingstate} = useDraggable<HTMLDivElement>()
  return (
    <div className="App">
      {draggingstate}
      <div ref={target} className='logo-wrapper'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
