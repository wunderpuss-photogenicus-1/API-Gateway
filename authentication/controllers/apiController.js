const apiController = {};

apiController.googleBooks = (req, res, next) => {
    const urlPartOne = 'https://www.googleapis.com/books/v1/volumes?q='
    const urlPartTwo = req.body.updatedString
    const urlPartThree = '&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    // const finalUrl = urlPartOne + urlPartTwo + urlPartThree;
    const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    res.locals.data = 'in api controller'
    // res.locals.finalUrl = finalUrl;
    // axios.get(finalUrl)
    // .then(response => {
    //     console.log('response data:', response.data);
    //     // console.log(response.data);
    //     // res.send(response.data.status);
    //     res.locals.data = response
    //     return next();
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    return next();  
    // fetch(finalUrl)
    // .then(response => 
    //     response.json())
    // .then(data => {
    //     // res.locals.data = data;  
    //     console.log('data');
    //     return next(); 
    // })
    // .catch(err => console.log('This is the catch'))
} 


module.exports = apiController

// performSearch(searchTerm ){
//     const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=e30af747df7905a923cedbcf8b405f72&query=' + searchTerm
//     const getlist = fetch(urlString)
//     .then(response => {
//         return response.json()
//     }).then(data => {
//         const results = data.results
//         const movieRows = [];
//         results.forEach((movie) => {
//             movie.poster_src = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
//             const movies = <MovieRow stars={this.state.stars} key={movie.id} movie={movie}/>
//             if(movie.poster_path !== null){
//             movieRows.push(movies)
//             }
//             this.setState({rows: movieRows})
//         })
//     })
//     .catch(err => {
//         console.log('Not a movie', err)
//     })
// }