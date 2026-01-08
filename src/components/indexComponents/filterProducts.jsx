import { useState } from "react"
import { dataApi } from "../../consts/persons"

export function FilterProducts(){

    const [inputValue, setInputValue] = useState('')

    function productsToFilter(){
        dataApi.getState().filterProducts(inputValue)
    }

    return(
        <div className="max-w-3xl mx-auto mb-10">
            <div
                className="relative flex items-center w-full h-14 rounded-full focus-within:ring-4 focus-within:ring-blue-500/30 bg-white overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.01]"
            >
                <div
                    className="grid place-items-center h-full w-12 text-gray-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={ () => {
                            if(!inputValue) return
                            productsToFilter()
                        } }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    className="peer h-full w-full outline-none text-lg text-gray-700 pr-4 placeholder-gray-400"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Buscar productos, marcas, categorías..."
                />
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white h-full px-8 font-medium transition-colors duration-200"
                    onClick={ () =>{
                        if(!inputValue) return
                        productsToFilter()
                    }}
                >
                    Buscar
                </button>
            </div>
        </div>
    )
}