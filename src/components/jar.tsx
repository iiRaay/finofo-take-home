import React from "react";
import { JarFruit } from "../types/fruit";

interface JarProps {
  jar: JarFruit[];
  removeFromJar: (id: string) => void;
}

const Jar: React.FC<JarProps> = ({ jar, removeFromJar }) => {
  const totalCalories = jar.reduce(
    (total, jarFruit: { fruit: { calories: any; }; }) => total + jarFruit.fruit.calories,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center">
        Jar - Total Calories ({totalCalories})
      </h2>
      <ul>
        {jar.map((fruit) => (
          <li key={fruit.id} className="mb-2 flex justify-between">
            <span>
              {fruit.fruit.name} ({fruit.fruit.calories} calories)
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              onClick={() => removeFromJar(fruit.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Jar;
