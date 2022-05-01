import React, {useEffect, useState} from 'react';
import classes from "./ProductItem.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setBasketProduct} from "../../store/basketProduct";
import {withTranslation} from "react-i18next";


const ProductItem = ({product, t}) => {
    const dispatch = useDispatch();
    const allProductsInBasket = useSelector(state => state.basket.product);
    const totalPriseInBasket = useSelector(state => state.basket.price);
    const isProductChoosed = allProductsInBasket.some(item => item.id === product.id)
    function addMovieToBasket(product, price) {
        const productDetails = {
            product: product,
            price: price,
        };
        dispatch(setBasketProduct(productDetails));

    }
    //////////////////////////////////
    const [order, setOrder] = useState(null)
    useEffect(() => {
       // const localStorageRef = localStorage.getItem("price")
       //  setOrder(JSON.parse(localStorageRef))
        localStorage.setItem("order", JSON.stringify(allProductsInBasket))
        localStorage.setItem("price", totalPriseInBasket)
    })
    // localStorage.setItem("order", JSON.stringify(allProductsInBasket))
    // localStorage.setItem("price", totalPriseInBasket)
    // console.log(order)

    return (
        <div className={classes.productCardWrap}>
            <div className={classes.productCard}>
                <div className={classes.titleContent}>
                    <div>{product.title}</div>
                </div>
                <img
                    className={classes.poster}
                    src={`https://image.tmdb.org/t/p/w200/${product.poster_path}`}
                    alt="poster"
                />
                <p className={classes.productOverview}>
                  {product.overview}
                </p>
            </div>
            <button
                className={
                    isProductChoosed ? classes.btnPriceDisablet : classes.btnPriceBuy
                }
                onClick={() => addMovieToBasket(product, product.vote_average)}
                disabled={isProductChoosed}
            >
                {isProductChoosed ? t('buttons.bought') : t('buttons.buy')}: {product.vote_average}$
            </button>
        </div>
    );
};

export default withTranslation()(ProductItem);