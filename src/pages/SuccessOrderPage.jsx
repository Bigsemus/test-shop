import React from 'react';
import {useSelector} from "react-redux";
import LangBtn from "../utils/helpers/LangBtn";
import LogOut from "../components/LogOut/LogOut";
import {withTranslation} from "react-i18next";
import NavBar from "../components/NavBar/NavBar";
// import {saveOrderToJson} from "../services/orderJsonCreator.js";

const SuccessOrderPage = ({t}) => {
   const dataUserOrder = useSelector(store => store.user.userData)
    // console.log(saveOrderToJson)
    console.log(dataUserOrder)
    return (
        <div>
            <div className="header">
                <div>
                    {t('header.success')}
                    <LangBtn/>
                    <NavBar />
                    <LogOut/>
                </div>
            </div>
            <>
                <p>Error while getting the products:</p>
                <pre>
                   {JSON.stringify(dataUserOrder, null, 2)}
                </pre>
            </>
            <div className="footer">
                <p>Svietoslav_Kovalchuk</p>
            </div>
        </div>
    );
};

export default withTranslation()(SuccessOrderPage);