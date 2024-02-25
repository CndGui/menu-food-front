import axios from "axios";

export async function postFoodData(foodData: FoodData) {
    try {
        const response = await axios.post("http://localhost:8080/foods", foodData)
        return true
    } catch (e) {
        console.error("Error posting food: " + e)
        return false
    }
}