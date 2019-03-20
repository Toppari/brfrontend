import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData('');
      setError('');
      setIsLoading(true);

      try {
        const playerResponse = await axios.get(url);
        setData({ player: playerResponse.data });

        const matchHistoryResponse = await axios.get(
          `/player/${playerResponse.data[0].id}/match`
        );

        //If there is matches, fetch the first match data
        if (matchHistoryResponse.data.data[0]) {
          const matchResponse = await axios.get(
            `/match/${matchHistoryResponse.data.data[0].id}`
          );
          setData({ player: playerResponse.data, match: matchResponse.data });
        }
      } catch (error) {
        //Check if there is custom error message from backend (else is custom)
        if (error.response.data.message) {
          setError(`Backend error: ${error.response.data.message}`);
        } else {
          setError(error.response.data);
        }
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
