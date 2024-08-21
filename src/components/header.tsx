import React from 'react';

interface HeaderProps {
  onReset: () => void;
  onGroupBy: (group: string) => void;
  groupBy: string;
}

const Header: React.FC<HeaderProps> = ({ onReset, onGroupBy, groupBy }) => {
  const handleGroupByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onGroupBy(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold mr-6">Fruit List App - Finofo!</h1>
      </div>
      <div className="flex justify-center flex-col items-center mb-4">
        <label htmlFor="groupBy" className="block text-l font-medium text-gray-700">Group by: </label>
        <select
          id="groupBy"
          value={groupBy}
          onChange={handleGroupByChange}
          className="mb-4 block px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="None">None</option>
          <option value="Family">Family</option>
          <option value="Order">Order</option>
          <option value="Genus">Genus</option>
        </select>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={onReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Header;
