import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (config, applyData) => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(config.url, {
                method: config.method ?  config.method : 'GET',
                body: config.body ? JSON.stringify(config.body) : null
            });
    
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            
            if (data) {
                applyData(data);
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (e) {
            console.log('Error: ', e.message);
            setError(true);
        } finally {
            setLoading(false);
        }
        
    }, []);

    return {
        loading,
        error,
        request
    }
};

export default useHttp;