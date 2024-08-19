import axios from 'axios';
import {Fruit} from '../types/fruit';

const corsProxy = 'https://corsproxy.io/?';

// Fetch the list of fruits from the Fruityvice API
export const getAllFruits = async (): Promise<Fruit[]> => {
    try {
        const response = await axios.get(`${corsProxy}https://www.fruityvice.com/api/fruit/all`);
        return response.data.map((fruit: any) => ({
            name: fruit.name,
            family: fruit.family,
            order: fruit.order,
            genus: fruit.genus,
            calories: fruit.nutritions.calories,
        }));
    } catch (error) {
        console.error('Error fetching fruits:', error);
        return [];
    }
};

// can actually make more function calls instead of sorting? -> api supports fetching fruits
// in specific categories and sorts.