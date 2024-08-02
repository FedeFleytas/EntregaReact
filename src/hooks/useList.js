import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useList = param => {
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState (true);
    const { id } = useParams();

    useEffect ( () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => resolve(param), 2000);
        })
        .then( (response) => {
            if(!id) {
                setItems(response);
            }else {
                const filtered = response.filter(i => i.category === id);
                setItems(filtered);
            }
        })
        .finally(() => setLoading(false));
    }, [id]);

    return {items, loading};
}
