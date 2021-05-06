/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data from resource');
          }
          return res.json();
        })
        .then((data1) => {
          setData(data1);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (!err.name === 'AbortError') {
            setError(err.message);
            setIsPending(false);
          }
        });
    });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
