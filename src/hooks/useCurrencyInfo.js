import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8c3a48e1d63fd0115023be49/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    console.error("Failed to fetch conversion rates");
                }
            })
            .catch((error) => console.error("Error fetching currency info:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
