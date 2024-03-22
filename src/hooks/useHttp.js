import { useState, useCallback } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestConfig) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.header ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null
      })

      if (!response.ok) throw new Error('Algo salio mal...');

      setIsLoading(false);

      return await response.json();

    } catch(error) {
      setError(error.message)
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, request }
}

export default useHttp;