import { deleteFoodData } from "@/hooks/deleteFoodData";
import { getFoodDataByName } from "@/hooks/getFoodDataByName";
import { postFoodData } from "@/hooks/postFoodData";
import axios from "axios";
import { useState } from "react"

export function DeleteFoodModal({ event }: { event: () => void }) {
    const [isLoading, setLoading] = useState(false)
    const [foodName, setFoodName] = useState("")
    const [exists, setExists] = useState(true)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFoodName(e.target.value)

        setExists(true)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        const foodData = await getFoodDataByName(foodName)
        console.log(foodData.exist)
        if(foodData.exist) {
            deleteFoodData(foodName).finally(() => {event(); setLoading(false)})
            setExists(true)
        }else {
            setExists(false)
            setLoading(false)
        }
    }

    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-black/30 flex items-center justify-center">
            <div className="relative w-[48rem] bg-white rounded-md p-16">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        className="py-2 px-1 outline-none border-2 rounded-md focus:border-red-600"
                        type="text"
                        placeholder="Comida"
                        name="name"
                        value={foodName}
                        onChange={handleChange}
                    />

                    <button
                        className="bg-red-600 text-white py-2 rounded-md"
                        type="submit"
                    >
                        {isLoading ? "Deletando..." : "Deletar"}
                    </button>
                    {!exists && 
                        <span className="absolute bottom-5 text-red-600 left-1/2 -translate-x-1/2">Este produto não existe!</span>
                    }
                </form>

                <button className="absolute px-2 bg-red-600 text-white rounded-md right-2 top-2" onClick={event}>
                    x
                </button>
            </div>
        </div>
    )
}