import React, {useState} from 'react';
import classes from './TotalItemCounter.module.scss'
import {useDispatch} from "react-redux";
import {addProduct, delProduct} from "../../store/basketProduct"

const TotalItemCounter = ({product}) => {
    const dispatch = useDispatch();
    let [count, setCount] = useState(1)

    const incrementProduct = () => {
        dispatch(addProduct(product))
        setCount(count + 1)
    }
    const decrementProduct = () => {
        const productDetails = {
            product: product,
            count: count,
        };
        dispatch(delProduct(productDetails))
        setCount(count - 1)
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
                <div className={classes.count}>{count}</div>
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