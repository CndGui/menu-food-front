'use client'

import axios from "axios";

export async function getFoodData() {
    try {
      const response = await axios.get<FoodData[]>('http://localhost:8080/foods');
      const formattedFoods = response.data.map((foodData: FoodData) => ({
        name: foodData.name,
        image: foodData.image,
        price: foodData.price
      }))

      return formattedFoods
    } catch (e) {
      console.error('Error fetching data:', e)
      return []
    }
  }