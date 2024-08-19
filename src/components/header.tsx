import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({onReset}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-6">Fruit List App - Finofo!</h1>
        <button
          onClick={onReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;