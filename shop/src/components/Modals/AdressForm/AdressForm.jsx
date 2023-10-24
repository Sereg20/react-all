import React from "react";
import cl from './AdressForm.module.css';

const AdressForm = () => {

    const onSubmitForm = () => {

    };

    return (
        <div className={cl.backgorund}>
            <form onSubmit={onSubmitForm} className={cl.form} onClick={(e) => {e.stopPropagation()}}>
                <div className={cl['form-item']}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"/>
                </div>
                <div className={cl['form-item']}>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street"/>
                </div>
                <div className={cl['form-item']}>
                    <label htmlFor="building">Building №</label>
                    <input type="text" id="building"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>  
    );
};

export default AdressForm;