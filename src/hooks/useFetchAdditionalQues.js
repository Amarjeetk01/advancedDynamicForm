import { useEffect, useState } from "react";
import { fetchAdditionalQuestions } from "../api/mockApi";

const useFetch = ({ topic }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        // const url = `http://localhost:5000/questions?topic=${topic}`;
        // const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error('Network Error');
        // }
        // const result = await response.json();

        // mock api
        const result = await fetchAdditionalQuestions(topic);;

        setData(result);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (topic) {
      fetchApiData();
    }
  }, [topic]);

  return { data, loading, error };
};

export default useFetch;
