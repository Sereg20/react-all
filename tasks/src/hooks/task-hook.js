import React, { useState, useCallback} from "react";

const useRequest = () => {

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(async (config, applyData) => {
        console.log("EXECUTED2")
        try {
            const response = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                body: config.body ? JSON.stringify(config.body) : null
            });
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
      
            const data = await response.json();
            applyData(data)  
        } catch(e) {
            console.log(e.message);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        error,
        isLoading,
        sendRequest
    };
};

export default useRequest;