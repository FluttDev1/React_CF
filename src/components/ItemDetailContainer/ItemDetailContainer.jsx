import { useState, useEffect } from "react"
import getProducts from "../../data/getProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import ItemDetailLoading from "../../Loading/ItemDetailLoading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loadingDetail, setLoadingDetail] = useState(true);

    const { idProduct } = useParams()

    useEffect(() => {
        getProducts
            .then((response) => {
                const newProduct = response.find((product) => product.id === idProduct)
                setProduct(newProduct)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoadingDetail(false));
    }, [idProduct])

    return (
        <>
            {
                loadingDetail ? <ItemDetailLoading /> : <ItemDetail product={product} />
            }
        </>
    )
}
export default ItemDetailContainer