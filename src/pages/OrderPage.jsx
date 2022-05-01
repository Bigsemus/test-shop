import React, {useState} from 'react';
import LangBtn from "../utils/helpers/LangBtn";
import LogOut from "../components/LogOut/LogOut";
import {withTranslation} from "react-i18next";
import '../styles/App.scss';
import {Navigate, NavLink} from "react-router-dom";
import {Formik, Field, Form} from 'formik';
import NavBar from "../components/NavBar/NavBar";
import {useDispatch} from "react-redux";
import {getValueOrderForm} from '../store/userData'
import OrderUserForm from "../components/OrderUserForm/OrderUserForm";
import OrderProductList from "../components/OrderProductList/OrderProduct";

const OrderPage = ({t}) => {

    return (
        <div>
            <div className="header">
                <div>
                    {t('header.order')}
                    <LangBtn/>
                    {/*<NavBar />*/}
                    <LogOut/>
                </div>
            </div>
            <div className="wrapOrderBlock">
                {<OrderProductList/>}
                {<OrderUserForm/>}
            </div>
            <div className="footer">
                <p>Svietoslav_Kovalchuk</p>
            </div>
        </div>
    );
};

export default withTranslation()(OrderPage);