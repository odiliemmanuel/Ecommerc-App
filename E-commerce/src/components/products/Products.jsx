import {useGetAllProductsQuery} from '../../apis/productApi.jsx'
import React from "react";
import styles from './products.module.css'  

const Products =() => {

    const {isLoading, isError, data} = useGetAllProductsQuery();
    console.log(data);

    if(isLoading){
        return( 
                <>Loading.....</>

        )
    }

    if(isError){
        alert("Error just occured")
    }

    // m38rmF$
    return (

        <>
             <ul className={styles.products}>
                {
                    data.map((product) => (
                        <div>
                            <img className={styles.img} src={product.image} alt={product.name} />
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))
                }
             </ul>
        </>
    )
}

export default Products

