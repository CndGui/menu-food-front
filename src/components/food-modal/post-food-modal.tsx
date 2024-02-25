import { postFoodData } from "@/hooks/postFoodData";
import { useState } from "react"

export function PostFoodModal({ event }: { event: () => void }) {
    const [isLoading, setLoading] = useState(false)
    const [food, setFood] = useState<FoodData>({
        name: "",
        image: "",
        price: 0
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFood({
            ...food,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        postFoodData(food).finally(() => { event(); setLoading(false) })
    }

    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-black/30 flex items-center justify-center">
            <div className="relative w-[48rem] h-[24rem] bg-white rounded-md p-16">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        className="py-2 px-1 outline-none border-2 rounded-md focus:border-blue-600"
                        type="text"
                        placeholder="Comida"
                        name="name"
                        value={food.name}
                        onChange={handleChange}
                    />
                    <input
                        className="py-2 px-1 outline-none border-2 rounded-md focus:border-blue-600"
                        type="number"
                        placeholder="Preço"
                        name="price"
                        value={food.price == 0 ? "" : food.price}
                        onChange={handleChange}
                    />
                    <input
                        className="py-2 px-1 outline-none border-2 rounded-md focus:border-blue-600"
                        type="text"
                        placeholder="Imagem"
                        name="image"
                        value={food.image}
                        onChange={handleChange}
                    />

                    <button
                        className="bg-blue-600 text-white py-2 rounded-md"
                        type="submit"
                    >
                        {isLoading ? "Postando..." : "Postar"}
                    </button>
                </form>

                <button className="absolute px-2 bg-red-600 text-white rounded-md right-2 top-2" onClick={event}>
                    x
                </button>
            </div>
        </div>
    )
}