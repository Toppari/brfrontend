import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.get(query);
      //TODO: change this to generic
      setData(response.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  const getData = query => {
    setQuery(query);
  };

  return [data, isLoading, error, getData];
};
