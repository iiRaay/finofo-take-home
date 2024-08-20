import React, { useState, useEffect } from 'react';
import { Fruit } from '../types/fruit';

interface FruitListProps {
    fruits: Fruit[];
    addToJar: (fruit: Fruit) => void;
  }

const FruitList: React.FC<FruitListProps> = ({fruits, addToJar}) => {
  return (
    <div className="p-4">
        <h2 className="text-xl font-bold mr-6 text-center">Available Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index} className="mb-2 flex justify-between">
                    {fruit.name} ({fruit.calories} calories)
                    <button 
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none" 
                    onClick={() => {addToJar(fruit)}}> + </button>
                </li>
                ))}
            </ul>
    </div>
  );
};

export default FruitList;
