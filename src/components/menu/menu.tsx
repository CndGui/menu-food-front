import { getFoodData } from "@/hooks/getFoodData";
import { useQuery } from "react-query";

export function Menu() {
    const { data, isError, isLoading } = useQuery("foods", getFoodData)
    const formattedFoods = data?.map((foodData: FoodData) => ({
        name: foodData.name,
        image: foodData.image,
        price: foodData.price
    }))

    

    return (
        <ul className="bg-zinc-100 w-[52rem] h-[32rem] p-4 rounded-md flex flex-wrap gap-6 overflow-y-auto">
            {isLoading ?
                <span>Loading...</span>
                :
                isError ?
                    <span>Error!</span>
                    :
                    formattedFoods?.length == 0 ?
                        <li>Nenhum.</li> :
                        formattedFoods?.map((food, index) => (
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