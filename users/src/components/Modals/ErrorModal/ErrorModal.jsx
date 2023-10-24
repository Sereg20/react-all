import React from "react";
import cl from './ErrorModal.module.css';
import ModalBtn from "../../UI/ModalBtn/ModalBtn";

const ErrorModal = ({setVisible, title, message}) => {
    const onModalClose = () => {
        setVisible(false);
    };

    const onModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={cl.modal} onClick={onModalClose}>
            <div className={cl.content} onClick={onModalContentClick}>
                <div className={cl.header}>{title}</div>
                <div className={cl.message}>{message}</div>
                <div className={cl.actions}>
                    <ModalBtn type='neutral' onClick={onModalClose}>Close</ModalBtn>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;