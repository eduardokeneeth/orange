import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Temperature from './components/Temperature/Temperature';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <Search />
      <Temperature />
    </div>
  );
}

export default App;
