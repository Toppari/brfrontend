import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [data, setData] = useState({});
  const [userName, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData('');
      setError('');
      setIsLoading(true);

      try {
        const playerResponse = await axios.get(`/player?name=${userName}`);
        //Set player data here
        //because if no matches were found we atleast wanna show player data
        setData({ player: playerResponse.data });

        const matchHistoryResponse = await axios.get(
          `/player/${playerResponse.data[0].id}/match`
        );

        const matchResponse = await axios.get(
          `/match/${matchHistoryResponse.data.data[0].id}`
        );

        setData({ player: playerResponse.data, match: matchResponse.data });
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

    if (userName) {
      fetchData();
    }
  }, [userName]);

  const getData = userName => {
    setUsername(userName);
  };

  return [data, isLoading, error, getData];
};
