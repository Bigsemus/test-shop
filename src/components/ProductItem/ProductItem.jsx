import React from 'react';
import classes from "./ProductItem.module.scss";
import {useDispatch} from "react-redux";
import {setBasketProduct} from "../../store/basketProduct";
import {withTranslation} from "react-i18next";


const ProductItem = ({product, t}) => {
    const dispatch = useDispatch();

    function addMovieToBasket(product, price) {
        const productDetails = {
            product: product,
            price: price,
        };
        dispatch(setBasketProduct(productDetails));
    }

    return (
        <div className={classes.productCard} id={product.id}>
            <div className={classes.titleContent}>
                <div>{product.title}</div>
            </div>
            <img
                className={classes.poster}
                src={`https://image.tmdb.org/t/p/w200/${product.poster_path}`}
                alt="poster"
            />
            <button
                className={classes.btnPriceBuy}
                onClick={() => addMovieToBasket(product, product.vote_average)}
            >
                {t('buy.buy')}: {product.vote_average}$
            </button>
        </div>
    );
};

export default withTranslation()(ProductItem);