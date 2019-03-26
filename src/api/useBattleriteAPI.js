import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [playerData, setPlayerData] = useState({});
  const [matchData, setMatchData] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setPlayerData({});
      setMatchData([]);
      setDataError('');
      setIsLoading(true);

      try {
        const playerResponse = await axios.get(`/player?name=${username}`);
        setPlayerData(playerResponse.data[0]);

        const matchHistoryResponse = await axios.get(
          `/player/${playerResponse.data[0].id}/match`
        );

        const matchArray = [];
        for (const match of matchHistoryResponse.data.data) {
          const matchResponse = await axios.get(`/match/${match.id}`);
          matchArray.push(matchResponse.data);
          setMatchData(matchArray);
        }
      } catch (error) {
        setDataError(error.response.data.message);
      }
      setIsLoading(false);
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  const getDataByUsername = username => {
    setUsername(username);
  };

  return [playerData, matchData, isLoading, dataError, getDataByUsername];
};
