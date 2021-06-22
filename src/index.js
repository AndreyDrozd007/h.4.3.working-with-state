import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkbox from './Checkbox';
import Player from './Player';
import Text from './Text';



ReactDOM.render(
  <React.StrictMode>
    <Checkbox />
    <Player />
    <Text />
  </React.StrictMode>,
  document.getElementById('root')
);

