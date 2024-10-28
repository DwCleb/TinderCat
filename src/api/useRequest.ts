import {Cat} from "../utils.ts";
import {useCallback, useState} from "react";

const API_KEY = '';
const useRequest = () => {
  const [requestPending, setRequestPending] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  const getCatProfiles = useCallback(async () => {
    try {
      setRequestError(null);
      setRequestPending(true);
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1',
        { headers: {'x-api-key': API_KEY}}
      );

      const json = await response.json();
      return json.map((cat: Cat) =>
        ({
          ...cat,
          name: cat.breeds[0].name,
          origin: cat.breeds[0].origin,
          affectionLevel: cat.breeds[0].affection_level
        })
      );
    } catch (err) {
      setRequestError((err as {message: string}).message);
    } finally {
      setRequestPending(false);
    }
  }, []);

  const addingCatVoting = useCallback(async (catId: string)=>
  {
    try {
    setRequestError(null);
    setRequestPending(true);
    const response = await fetch('https://api.thecatapi.com/v1/votes',
      {
        method: 'POST',
        body: JSON.stringify({
          image_id: catId,
          sub_id: "cat-tinder-mindera",
          value: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY}}
    );
    console.log(response);

  } catch (err) {
    setRequestError((err as {message: string}).message);
  } finally {
    setRequestPending(false);
  }
}, []);

  return {
    requestPending,
    requestError,
    getCatProfiles,
    addingCatVoting,
  };
};

export default useRequest;
