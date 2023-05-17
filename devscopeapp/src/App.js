import logo from './logo.svg';
import './App.css';

//chatbot
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from './chatbot';

const App = () => {
  return (
    React.createElement(ChatBot, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));



export default App;
