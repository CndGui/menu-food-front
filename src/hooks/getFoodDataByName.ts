'use client'

import axios from "axios";

export async function getFoodDataByName(foodName: String) {
    try {
        const response = await axios.get<FoodData>("http://localhost:8080/foods/" + foodName)
        return {
            body: response.data,
            exist: true
        }
    } catch {
        return {
            body: {},
            exist: false
        }
    }
}