import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/header';
import FruitList from './components/fruits';
import Jar from './components/jar';
import { Fruit, JarFruit } from './types/fruit';
import { getAllFruits } from './services/getFruits';

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [jar, setJar] = useState<JarFruit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [initialState, setInitialState] = useState<Fruit[]>([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const data = await getAllFruits();
        setFruits(data);
        setInitialState(data);
      } catch (err) {
        setError('Failed to fetch fruits');
      } finally {
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);
  
  const handleReset = () => {
    setJar([]);
    setFruits(initialState);
  }

  const removeFromJar = (id: string) => {
    setJar(jar.filter(jarFruit => jarFruit.id !== id));
  };

  const addToJar = (fruit: Fruit) => {
    setJar([...jar, { id: uuidv4(), fruit }]);
  }

  if (loading) {
    return <div>Loading Fruits...</div>;
  }

  if (error) {
    return <div>Error loading fruits: {error}</div>;
  }

  return (
    <>
      <Header onReset={handleReset} />
      <div className="grid grid-cols-2 gap-4 p-4">
        <FruitList fruits={fruits} addToJar={addToJar} />
        <Jar jar={jar} removeFromJar={removeFromJar}/>
      </div>
    </>
  );
}

export default App;
