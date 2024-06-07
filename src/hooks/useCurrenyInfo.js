import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [condata, setcondata] = useState({});

  const data = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(data)
      .then((res) => {
        
        return res.json();
      })
      .then((res) => {
        
        setcondata(res[currency]);
      });
  }, [currency]);
//    console.log(condata);
  return condata;
}
export default useCurrencyInfo;
