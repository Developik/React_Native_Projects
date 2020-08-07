//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import Game from './gamecode.js'; 
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
    return (
      //<Game />

        <div className="App">
            <Game />
        </div>
  );
}

export default App;
