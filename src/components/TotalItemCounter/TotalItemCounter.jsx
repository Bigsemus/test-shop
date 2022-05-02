import React from 'react';
import classes from './TotalItemCounter.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addProduct, delProduct} from "../../store/basketProduct"

const TotalItemCounter = ({product}) => {
    const dispatch = useDispatch();
    const copyProduct = {...product};
    const allProductsInBasket = useSelector(state => state.basket.product);
    const totalPriseInBasket = useSelector(state => state.basket.price);
    localStorage.setItem("order", JSON.stringify(allProductsInBasket))
    localStorage.setItem("price", totalPriseInBasket)

    const incrementProduct = () => {
        copyProduct.countProduct += 1;
        dispatch(addProduct(copyProduct))
    }
    const decrementProduct = () => {
        copyProduct.countProduct -= 1;
        dispatch(delProduct(copyProduct))
    }
    return (
        <div>
            <div className={classes.countPrice}>Price: {product.vote_average} $</div>
            <div className={classes.wrapCounter}>
                <button
                    onClick={decrementProduct}
                >
                    -
                </button>
                <div className={classes.count}>{copyProduct.countProduct}</div>
                <button
                    onClick={incrementProduct}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default TotalItemCounter;