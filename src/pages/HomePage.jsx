import React, {useEffect, useState} from 'react';
import '../styles/App.scss';
import {useDispatch, useSelector} from "react-redux";
//import {getProductList} from '../store/basketProduct.js'
import ProductItem from '../components/ProductItem/ProductItem';
import getAllMovies from "../services/ProductsService";
import {logDOM} from "@testing-library/react";
import Loader from "../utils/helpers/Loader";
import {fetchProductList} from "../store/fethProductList";
import LangBtn from "../utils/helpers/LangBtn";
import { withTranslation } from 'react-i18next';
//import NavBar from "./NavBar";
import LogOut from "../components/LogOut/LogOut";
import ProductList from "../components/ProductList/ProductList";

const HomePage = ({ t }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductList());
    }, [dispatch]);

    const isLoading = useSelector(state => state.productList.isLoading);
    const productError = useSelector(state => state.productList.error);
    const productsInfo = useSelector(state => state.productList.products);


    return (
        <div>
            <div className="header">
                <div>
                {t('header.movieShop')}
                <LangBtn />
                {/*<NavBar />*/}
                <LogOut />
            </div>
            </div>

            {isLoading && (
                <Loader/>
            )}
            {productError && (
                <>
                    <p>Error while getting the products:</p>
                    <pre>JSON.stringify(productError, null, 2)</pre>
                </>
            )}
            {productsInfo && (
                <ProductList
                    products={productsInfo}
                />
                // productsInfo.map(product => (
                //     <ProductItem
                //         product={product}
                //         key={product.id}
                //     />
                // ))
            )}
            <div className="footer">
                <p>Svietoslav_Kovalchuk</p>
            </div>
        </div>
    );
};

export default withTranslation()(HomePage);