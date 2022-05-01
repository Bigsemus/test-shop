import React from 'react';
import classes from "./OrderProduct.module.scss";
import {useSelector} from "react-redux";
import Loader from "../../utils/helpers/Loader";
import {NavLink} from "react-router-dom";
import {withTranslation} from "react-i18next";
import TotalProductList from "../TotalProductList/TotalProductList";
import ProductItem from "../ProductItem/ProductItem";

const OrderProduct = ({t}) => {
    const totalPrice = useSelector(store => store.basket.price)
    const totalProduct = useSelector(store => store.basket.product)
    return (
        <div className={classes.wrapProductOrderList}>
            {totalProduct.length ? (
                <TotalProductList
                    totalPrice={totalPrice}
                    totalProduct={totalProduct}
                />
                ) :
                (
                        <div className={classes.didNotChoose}>
                            <p >
                                {t('p.didNotChoose')}
                            </p>
                            <NavLink to="/">
                                <button
                                    className={classes.doYouWant}
                                    type="button">
                                    {t('buttons.doYouWant')}
                                </button>
                            </NavLink>
                        </div>
                )
            }
        </div>
    );
};

export default withTranslation()(OrderProduct);