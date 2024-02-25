'use client'

import axios from "axios";

export async function deleteFoodData(foodName: String) {
    try {
        await axios.delete("http://localhost:8080/foods/name/" + foodName)
    } catch (e) {
        console.error("Error delete food: " + e)
    }
}