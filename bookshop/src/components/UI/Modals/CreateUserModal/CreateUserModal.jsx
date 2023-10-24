import React from "react"
import cl from './CreateUserModal.module.css'

const CreateUserModal = ({children, visible, setVisible}) => {

    let rootClasses = [cl.modal];

    if (visible) {
        debugger
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default CreateUserModal