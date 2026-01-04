import useFetch from "../../hooks/useFetch";
import Buttons from "../button";
import IsLoading from "../loading/isLoading";

export function ProductsCards() {
    const url = `https://fakestoreapi.com/products`
    const products = useFetch(url)

    return (
        <section className="container mx-auto px-4 py-12">
            {products.isLoading ? <IsLoading /> :
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                {products.data?.map(product => {
                    return (
                        <div key={product.id} className="group flex flex-col w-full max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                            <div className="relative pt-6 px-6 pb-2 flex justify-center items-center bg-gray-50 h-64 overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                            <div className="flex flex-col grow p-6">
                                <h4 className="text-gray-900 font-bold text-lg leading-tight mb-2 line-clamp-2 min-h-12" title={product.title}>
                                    {product.title}
                                </h4>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Precio</span>
                                        <span className="text-2xl font-extrabold text-amber-600">${product.price}</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Buttons
                                        name={"Agregar al Carrito"}
                                        onClick={() => console.log("Agregado")}
                                        className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </section>
    )
}