import React from 'react';
import './App.css';
import { RankingViews } from './lib/rankingView';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <RankingViews elements={5}/>
      </header>
    </div>
  );
}

export default App;
