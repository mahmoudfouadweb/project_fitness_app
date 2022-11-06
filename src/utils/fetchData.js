// fetch data
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "58e7289799msha1edf3edb32348cp1e08a4jsnbd5b1fd566dc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "58e7289799msha1edf3edb32348cp1e08a4jsnbd5b1fd566dc",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
