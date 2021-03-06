import { useCallback, useState } from "react";

export const useHttp = () => {
    let [currentPage, setCurrentPage] = useState(1);
    let [loading, setLoading] = useState(false);

    const onPageChanged = (props) => {
        setCurrentPage(props);
    }
    
    const request = useCallback(async (url, method='GET') => {
        setLoading(true);

        try {
            const response = await fetch(url, { method });
            const data = await response.json();
            setLoading(false);
            return data;
            
        } catch (e) {
            setLoading(false);
            throw e;
        }
    }, [])
    
    return {currentPage, onPageChanged, loading, request}
} 