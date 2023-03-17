// var request = require('request');

// // see if we can call this from the backend (server side)

// function makeRequestlist () {
    
//     request({ url: `https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG` } , function(err, res, jsonString) {
//         var json = JSON.parse(jsonString);
//         var gameNameList = json.games.map(e => e.name);
//         console.log(gameNameList);
    
//         var gameImageList = json.games.map(e => e.image_url);
//         console.log(gameImageList[0]);

//         return {gameNameList ; gameImageList} ;
//     });
// }

// test= makeRequestlist();
// console.log(test);

// function createArrayOfObjects(imageLinks, gameTitles) {
//     if (imageLinks.length !== gameTitles.length) {
//       throw new Error('The arrays must have the same length');
//     }
  
//     const arrayOfObjects = [];
  
//     for (let i = 0; i < imageLinks.length; i++) {
//       const newObject = {
//         title: gameTitles[i],
//         imageLink: imageLinks[i],
//       };
  
//       arrayOfObjects.push(newObject);
//     }
  
//     return arrayOfObjects;
//   }

// // Function to fetch data from the API
// export async function fetchDataFromAPI() {
//   const apiUrl = 'https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG';

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     const imageLinks = data.games.map(e => e.image_url);
//     const gameTitles = data.games.map(e => e.name);

//     return {
//       imageLinks: imageLinks,
//       gameTitles: gameTitles,
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }


// export async function main() {
//     try {
//       const data = await fetchDataFromAPI();
  
//       // Access the arrays outside of the function
//       console.log('Image Links:', data.imageLinks);
//       console.log('Game Titles:', data.gameTitles);
  
//       // Call the previous createArrayOfObjects function with the fetched data
//       const combinedArray = createArrayOfObjects(data.imageLinks, data.gameTitles);
  
//       console.log('Combined Array:', combinedArray);
  
//       return combinedArray;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   // Example of using the combinedArray outside of main
//   export async function displayCombinedArray() {
//     try {
//       const combinedArray = await main();
  
//       // Use the combinedArray here
//       console.log('Using combinedArray:', combinedArray);
//       return combinedArray;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }


export const searchGamesAPI= () => {
  return fetch('https://api.boardgameatlas.com/api/search?pretty=true&limit=10&client_id=rYefHsAVYG'); 
}