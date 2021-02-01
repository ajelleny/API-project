// console.log("Sanity Check!")

// // DOM manipulation
// const giphySearch = document.querySelector('img')

// const button = document.querySelector('button');


// button.addEventListener('click', function(evt) {
//     fetch('https://api.giphy.com/v1/gifs/search?api_key=v6BNp1B7ZvukCjJTE76IuyD9cQXsl3d4')
//     .then(function(giphyResponse){
//         return giphyResponse.json();
//     })
//     .then(function(newGiphyResponse) {
//         console.log(newGiphyResponse) 
//         //DOM manipulation
//         // giphySearch.innerHTML = newGiphyResponse.


//     })
// })

//ATTEMPT AT FETCHING KEYWORD
// input.addEventListener('input', function(evt) {
//     fetch('https://api.giphy.com/v1/gifs/search?api_key=v6BNp1B7ZvukCjJTE76IuyD9cQXsl3d4')
//     .then(function(giphyInput){
//         return giphyInput.json();
//     })
//     .then(function(newGiphyInput) {
//         console.log(newGiphyInput) 
//     })
// })



// ATTEMPT AT GETTING A RANDOM GIF TO POPULATE
// DOM manipulation
const giphySearch = document.querySelector('img')

const button = document.querySelector('button');


button.addEventListener('click', function(evt) {
    console.log(document.getElementById("search").value)

        let search = document.getElementById("search").value
        console.log("this is search", search)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=v6BNp1B7ZvukCjJTE76IuyD9cQXsl3d4&q=${search}`)
    .then(function(giphyResponse){
        return giphyResponse.json();
    })
    .then(function(newGiphyResponse) {
        console.log(newGiphyResponse) 
        


        //DOM manipulation
        // giphySearch.innerHTML = newGiphyResponse.bitly_gif_url


    })
})




