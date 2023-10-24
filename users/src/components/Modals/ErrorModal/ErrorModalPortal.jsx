import ReactDOM from "react-dom";
import ErrorModal from "./ErrorModal";

const ErrorModalPortal = ({...props}) => {

    return (
        <>
            {ReactDOM.createPortal(<ErrorModal {...props}/>, document.getElementById('modal'))}
        </>
    );
}

export default ErrorModalPortal;