import React from 'react';
import ReactDOM from 'react-dom';

const sum = (a, b) => a + b
const result = <h2>{sum(10, 10)}</h2>

ReactDOM.render(result,document.getElementById('root'));
