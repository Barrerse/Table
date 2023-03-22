export const searchGamesAPI = (query) => {
    return fetch(`https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG&name=${query}`); 
  }
  