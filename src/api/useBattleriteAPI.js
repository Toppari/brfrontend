import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData('');
      setError('');
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.response.data);
      }

      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  const getData = url => {
    setUrl(url);
  };

  return [data, isLoading, error, getData];
};
