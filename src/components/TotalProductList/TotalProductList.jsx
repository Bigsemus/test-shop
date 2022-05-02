import React, {useEffect, useRef} from 'react';
import classes from "./TotalProductList.module.scss";
import {useSelector} from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import TotalItem from "../TotalItem/TotalItem";

const TotalProductList = ({totalPrice, totalProduct}) => {

    let price = totalProduct.length === 0 ? null : totalPrice.toFixed(2)
    return (
        <div>
            <div>
                 {totalProduct.map((product) => (
                         <TotalItem
                             product={product}
                             key={product.id}
                         />
                     ))}
                <p className={classes.totalPrice}>TOTAL: {price} $</p>
            </div>
        </div>
    );
};

export default TotalProductList;