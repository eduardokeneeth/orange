import React from 'react';
import Switch from '../Switch/Switch';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-orange-600 p-4 text-white shadow">
      <h1 className="font-bold">ORANGE Weather</h1>
      <Switch />
    </header>
  );
};

export default Header;
