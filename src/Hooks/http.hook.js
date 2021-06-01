import { useCallback, useState } from "react";

export const useHttp = () => {
    let [currentPage, setCurrentPage] = useState(1);

    const onPageChanged = (props) => {
        setCurrentPage(props);
    }
    
    let [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method='GET') => {
        setLoading(true);
        try {
            const response = await fetch(url, {method});
            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }
        setLoading(false);
            return data;
        } catch (e) {
        setLoading(false);
        throw e;
        }
    }, [])
    
    return {currentPage, onPageChanged, loading, request}
} 