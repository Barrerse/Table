// make a search to board game api
export const searchGamesAPI= () => {
    return fetch('https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG'); 
}
  
export const searchGamesAPI100 = (searchInput) => { 
    return fetch(`https://api.boardgameatlas.com/api/search?pretty=true&limit=100&client_id=rYefHsAVYG`);
}

export const clientAPI = () => {
    return fetch('https://api.boardgameatlas.com/api/forum?client_id=rYefHsAVYG');
}

export const commentsAPI = () => {
    return fetch('https://api.boardgameatlas.com/api/forum/comments?client_id=rYefHsAVYG');
}


// rYefHsAVYG