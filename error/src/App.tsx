import React from 'react';
import './App.css';
import espantaho from './espantalho.png';

function App() {
  return (
    <div className="infos">
      <div className="info-left">
        <img src={espantaho} alt="" />
      </div>
      <div className="info-right">
        <h1>Error 404</h1>
        <p>Desculpe mas não encontramos a página que você está procurando</p>
        <a className='voltar' href="https://portfolio-matheusr.vercel.app">Retornar</a>
      </div>
    </div>
  );
}

export default App
