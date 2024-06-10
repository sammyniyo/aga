import React from 'react';
import './App.css';
import MusicSheetEditor from './components/MusicSheetEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Sheet Creator</h1>
      </header>
      <main>
        <MusicSheetEditor />
      </main>
    </div>
  );
}

export default App;
