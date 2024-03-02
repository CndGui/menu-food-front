'use client'

import axios from "axios";

export async function getFoodData() {
    try {
      const response = await axios.get<FoodData[]>('http://localhost:8080/foods');
      return response.data
    } catch (e) {
      console.error('Error fetching data:', e)
      return []
    }
  }