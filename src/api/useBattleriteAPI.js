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
      setData(response.data.data[0].attributes.name);
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
    setQuery(`/player?name=${query}`);
  };

  return [data, isLoading, error, getData];
};
