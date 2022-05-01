import React from 'react';
import {useSelector} from "react-redux";

const SuccessOrderPage = () => {
   const dataUserOrder = useSelector(store => store.user.userData)
    console.log(dataUserOrder)
    return (
        <div>
            5555
        </div>
    );
};

export default SuccessOrderPage;