import axios from 'axios';
import { useState, useEffect } from "react";

export const useFetch = (route) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await axios.get(`http://localhost:5005${route}`);
                setData(response.data);
            } catch (error) { 
                console.error(error);
            }
        }; 
        fetchData();
    }, []);
    return data;
}