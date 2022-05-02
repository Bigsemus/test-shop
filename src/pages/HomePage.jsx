import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.scss';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../utils/helpers/Loader";
import {fetchProductList} from "../store/fetchProductList";
import LangBtn from "../utils/helpers/LangBtn";
import {withTranslation} from 'react-i18next';
//import NavBar from "./NavBar";
import LogOut from "../components/LogOut/LogOut";
import ProductList from "../components/ProductList/ProductList";
import {setBasketFromLocalStorage} from "../store/basketProduct";

const HomePage = ({t}) => {
    const dispatch = useDispatch();
    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            //componentDidMount
            const localStoragePrice = localStorage.getItem("price")
            const localStorageOrder = localStorage.getItem("order")
            if (localStorageOrder) {
                const productDetails2 = {
                    product: JSON.parse(localStorageOrder),
                    price: Number(localStoragePrice),
                };
                dispatch(setBasketFromLocalStorage(productDetails2));
            }
            mounted.current = true;
        } else {
            //componentDidUpdate
            dispatch(fetchProductList());
        }
    }, [dispatch])

    const isLoading = useSelector(state => state.productList.isLoading);
    const productError = useSelector(state => state.productList.error);
    const productsInfo = useSelector(state => state.productList.products);


    return (
        <div>
            <div className="header">
                <div>
                    {t('header.movieShop')}
                    <LangBtn/>
                    {/*<NavBar />*/}
                    <LogOut/>
                </div>
            </div>
            {isLoading && (
                <Loader/>
            )}
            {productError && (
                <>
                    <p className={"Error"}>Error while getting the products:</p>
                    <pre>
                        {JSON.stringify(productError, null, 2)}
                    </pre>
                </>
            )}
            {productsInfo && (
                <ProductList
                    products={productsInfo}
                />
            )}
            <div className="footer">
                <p>Svietoslav_Kovalchuk</p>
            </div>
        </div>
    );
};

export default withTranslation()(HomePage);