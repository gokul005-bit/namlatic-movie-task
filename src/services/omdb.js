const API_KEY = "b80a4cc3";

export const searchMovies = async (query) => {
  if (!query) return [];

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  return data.Search || [];
};
