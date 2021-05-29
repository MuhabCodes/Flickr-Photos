import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data');
          }
          return res.json();
        })
        .then((Data) => {
          setIsLoading(false);
          setData(Data); // fectch data
          setError(null);
        })
        .catch((Error) => {
          // auto catches network / connection error
          setIsLoading(false);
          setError(Error.message);
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isloading, error };
};

export default useFetch;
