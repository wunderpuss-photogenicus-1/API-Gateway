const fetch = require('node-fetch');
const apiController = {};

apiController.googleBooks = (req, res, next) => {
    const urlPartOne = 'https://www.googleapis.com/books/v1/volumes?q='
    const urlPartTwo = req.body.updatedString
    const urlPartThree = '&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    const finalUrl = urlPartOne + urlPartTwo + urlPartThree;
    // const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    res.locals.data = [];
    fetch(finalUrl)
    .then(response => {
        console.log('google response', response)
        return response.json()
    })
    .then(data => {
        for (let i = 0; i < 4; i++) {
            let bookInfo = {
                title: data.items[i].volumeInfo.title,  
                selfLink: data.items[i].selfLink,     
                author: data.items[i].volumeInfo.authors[0],   
              }
            res.locals.data.push(bookInfo);
        }

        return next();
    })
    .catch(err => console.log(err))
} 

apiController.newYorkTimes = (req, res, next) => {
    const urlPartOne = 'http://openlibrary.org/search.json?q='
    const urlPartTwo = req.body.updatedString
    // const finalUrl = urlPartOne + urlPartTwo;
    const finalUrl = 'https://api.nytimes.com/svc/books/v3/reviews.json?title=Dune&api-key=sdYVGp8NDwS0Q6WjF3uj6A3YxsYinxtX';
    // test URL = http://openlibrary.org/search.json?q=moby+dick
    
    // const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    fetch(finalUrl)
    .then(response => {        
        // return JSON.parse(response); 
         return response.json(); 
    })
    .then(data => {
        console.log('new data',data)
        for (let i = 0; i < 2; i++) {
            console.log('this is the data', data)
            let selfLink = data.results[i].url
            let bookInfo = {
                title: data.results[i].book_title,  
                selfLink: selfLink,     
                author: data.results[i].book_author,   
              }
            res.locals.data.push(bookInfo);
        }
        return next();
    })
    .catch(err => console.log(err))
} 

module.exports = apiController
