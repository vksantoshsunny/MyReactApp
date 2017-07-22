import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './Products';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FilterableProductTable />, document.getElementById('container'));
registerServiceWorker();



