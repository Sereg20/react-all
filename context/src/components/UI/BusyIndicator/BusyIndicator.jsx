import cl from './BusyIndicator.module.css';
import ReactDOM from 'react-dom';

const BusyIndicator = () => {

    return (
        <>
            {ReactDOM.createPortal(
                <div className={cl.wrapper}>
                    <div className={cl.indicator}></div>
                </div>, document.getElementById('busy-indicator')
            )}
        </>        
    );
};

export default BusyIndicator;