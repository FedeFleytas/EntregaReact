import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDetail = param => {
    const [item, setItem] = useState ([]);
    const [loading, setLoading] = useState (true);
    const { id } = useParams();

    useEffect ( () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => resolve(param), 2000);
        })
        .then( (response) => {
                const finded = response.find(i => i.id === Number(id));
                setItem(finded);
        })
        .finally(() => setLoading(false));
    }, [id]);

    return {item, loading, id};
}