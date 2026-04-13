import {useGetAllProductsQuery} from "../../services/productsApi";
import React from "react";

const Products = () => {

    const data = useGetAllProductsQuery();
    console.log(data);

    return (
        <>

        </>
    )
}

