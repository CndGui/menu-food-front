import { getFoodData } from "@/hooks/getFoodData";
import { useEffect, useState } from "react";

export function Menu() {
    const [foods, setFoods] = useState<FoodData[]>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const foodsData = await getFoodData()
            setFoods(foodsData)
            setLoading(false)
        }

        fetchData()
    })

    return (
        <ul className="bg-zinc-100 w-[52rem] h-[24rem] p-4 rounded-md flex flex-wrap justify-between gap-y-6 overflow-y-auto">
            {isLoading ?
                <span>Loading...</span>
                :
                foods.length == 0?
                <li>Nenhum.</li>:
                foods.map((food, index) => (
                    <li className="bg-white rounded-md p-2 h-60 w-60 flex flex-col gap-5" key={index}>
                        <div className="flex justify-center items-center">
                            <img className="size-32" src={food.image} alt={food.name} />
                        </div>

                        <div>
                            <div className="flex gap-1">
                                <p className="text-zinc-700">Comida:</p>
                                <p className="font-semibold">{food.name}</p>
                            </div>

                            <div className="flex gap-1">
                                <p className="text-zinc-700">Preço:</p>
                                <p className="font-semibold">{food.price}R$</p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}