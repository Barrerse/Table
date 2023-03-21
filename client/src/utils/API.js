// make a search to board game api
export const searchGamesAPI= () => {
    return fetch('https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG'); 
}
  