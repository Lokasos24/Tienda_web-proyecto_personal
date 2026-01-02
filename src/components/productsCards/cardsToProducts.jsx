import useFetch from "../../hooks/useFetch";

export function ProductsCards(){
    const url = `https://fakestoreapi.com/products`
    const products = useFetch(url)

    return (
        <div>
            {products.datas.map(product => {
                return (
                    <div key={product.id}>
                        <h4>{product.title}</h4>
                        <img src={product.image} alt="" />
                        <span>{product.price}</span>
                    </div>
                )
            })}
        </div>
    )
}