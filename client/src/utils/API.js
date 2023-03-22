// make a search to board game api
export const searchGamesAPI= () => {
    return fetch('https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG'); 
}
  
export const searchGamesAPI100 = (searchInput) => { 
    return fetch(`https://api.boardgameatlas.com/api/search?pretty=true&limit=100&client_id=rYefHsAVYG`);
}
export const searchGamesAPIVid = (searchInput) => { 
    return fetch(`https://api.boardgameatlas.com/api/game/videos?pretty=true&limit=20&client_id=rYefHsAVYG`);
}
