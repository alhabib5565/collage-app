import React, { useEffect, useState } from 'react';

const useCollageData = () => {
    const [loading, setLoading] = useState()
    const [collages, setCollages] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_API_URL}/collages`)
        .then(res => res.json())
        .then(data => {
            setCollages(data)
            setLoading(false)
        })
    }, [])
    return [loading, setLoading, collages, setCollages]
};

export default useCollageData;