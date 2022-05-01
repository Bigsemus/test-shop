import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getValueOrderForm} from "../../store/userData";
import {Field, Form, Formik} from "formik";
import {Navigate, NavLink} from "react-router-dom";
import {withTranslation} from "react-i18next";
import classes from "./OrderUserForm.module.scss";

const OrderUserForm = ({t}) => {
    const dispatch = useDispatch()
    const [isDispatched, setIsDispatched] = useState(false);
    const onSubmitForm = (formValue) => {
        dispatch(getValueOrderForm(formValue));
        setIsDispatched(true);
    };
    return (
        <div>
        <div className={classes.wrapOrder}>
            <Formik
                initialValues={{ name: '', surname: '', address: '', phone: '' }}
                onSubmit={(formValue) => {
                    onSubmitForm(formValue);
                }}
            >
                <Form>
                    <Field id="name" name="name" placeholder={t('input.name')} />
                    <Field id="surname" name="surname" placeholder={t('input.surname')} />
                    <Field id="address" name="address" placeholder={t('input.address')} />
                    <Field id="phone" name="phone" placeholder={t('input.phone')} />
                    {isDispatched && <Navigate to="/success" />}
                    <div className={classes.wrapBtnFormSubmit}>
                        <button type="submit">
                            {t('buttons.submit')}
                        </button>
                        <NavLink to="/">
                            <button type="button">
                                {t('buttons.back')}
                            </button>
                        </NavLink>
                    </div>

                </Form>
            </Formik>
        </div>
        </div>
    );
};

export default withTranslation()(OrderUserForm);