import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.get(query, {
        headers: {
          Authorization: 'Bearer ' + process.env.REACT_APP_BR_API_KEY,
          Accept: 'application/json'
        }
      });
      setData(response.data.data[0].attributes.name);
    } catch (error) {
      console.log(error);
      // setError(error.response.data.errors[0].title);
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