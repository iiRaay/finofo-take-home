import React, { useState } from 'react';
import { Fruit } from '../types/fruit';

interface FruitListProps {
  groupedFruits: { key?: string; values?: Fruit[] }[];
  addToJar: (fruit: Fruit) => void;
}

const FruitList: React.FC<FruitListProps> = ({ groupedFruits, addToJar }) => {
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (key: string) => {
    setExpandedGroups(prevState => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <div>
    <h2 className="text-xl font-semibold text-center">Fruits</h2>
      {groupedFruits.map(group => (
        <div key={group.key || 'flat'} className="mb-4">
          {group.key && (
            <h2
              className="cursor-pointer text-xl font-bold"
              onClick={() => toggleGroup(group.key!)}
            >
              {group.key}
            </h2>
          )}
          {(!group.key || expandedGroups[group.key]) && (
            <ul>
              {group.values?.map(fruit => (
                <li key={fruit.name} className="flex justify-between items-center py-2">
                  <span>{fruit.name}</span>
                  <button
                    onClick={() => addToJar(fruit)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                  >
                    Add to Jar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FruitList;
