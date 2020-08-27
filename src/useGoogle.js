import { useState, useEffect } from "react";

import { apiKey } from "./api";
const Context_Key = "c09b5337fbe54a217";

const useGoogle = ({ term }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${Context_Key}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((err) => console.log(err.message));
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogle;
