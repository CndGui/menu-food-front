'use client'

import { Menu } from "@/components/menu/menu"
import { PostFoodModal } from "@/components/food-modal/post-food-modal"
import { useState } from "react"
import { DeleteFoodModal } from "@/components/food-modal/delete-food-modal"

export default function Home() {
    const [postModal, setPostModal] = useState(false)
    function tooglePostModal() {
        setPostModal(!postModal)
    }

    const [deleteModal, setDeleteModal] = useState(false)
    function toogleDeleteModal() {
        setDeleteModal(!deleteModal)
    }

    return (
        <div className="h-screen p-4">
            <div className="h-full flex flex-col items-center justify-center bg-white rounded-md">
                <div className="relative">
                    <h1 className="text-xl font-semibold">Cardapio:</h1>
                    <div className="absolute top-0 -right-[23rem] flex gap-2">
                        <button className="bg-blue-600 px-2 text-white rounded-md" onClick={tooglePostModal}>Novo</button>
                        {postModal && <PostFoodModal event={tooglePostModal} />}
                        <button className="bg-red-600 px-2 text-white rounded-md" onClick={toogleDeleteModal}>Excluir</button>
                        {deleteModal && <DeleteFoodModal event={toogleDeleteModal} />}
                    </div>
                </div>

                <Menu />
            </div>
        </div>
    )
}
