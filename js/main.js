
// DOM manipulation
// const giphySearch = document.querySelector('p')

// const giphyResults = document.querySelector("img")


const button = document.querySelector('button')

//adding a reset button 
const resetButton = document.querySelector('reset')

const giphyImage = document.createElement('img');
giphyImage.setAttribute('class', "giphyImage") 

const gifImage = document.getElementById('gif-image')


button.addEventListener('click', (evt) => {
    // console.log(document.getElementById("search").value)

    let search = document.getElementById("search").value
    console.log("this is search for", search)
    giphyImage.src = ""

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=v6BNp1B7ZvukCjJTE76IuyD9cQXsl3d4&q=${search}&limit=1`)
    .then((giphyResponse) => {
        return giphyResponse.json();
    })
    .then((newGiphyResponse) => {
        console.log(newGiphyResponse)
        console.log(newGiphyResponse.data[0].url) 

        //DOM manipulation  
        // let giphyImage = document.createElement('img');
        //console.log(giphyImage)
        //giphyImage.setAttribute('src', newGiphyResponse.data[0].url) 
        // giphyImage.setAttribute('src', newGiphyResponse.data[0].images.original.url) 
        giphyImage.src = newGiphyResponse.data[0].images.original.url 
        //giphyImage.setAttribute('class', "giphyImage") 
        // append element to container
        gifImage.appendChild(giphyImage)
        // document.getElementById("gif-image").appendChild(giphyImage)
   
    })

})


// resetButton.addEventListener('click', function()) {
//     document.getElementById("search").value = ""
// }



//reset button 
// resetButton.addEventListener('click', function(resetGiphy)) {
    // let search = document.getElementById("search").value
// }


// //function for reset button 
// function resetGiphy () {
//     let search = document.getElementById("search").value}





//<img src="newGiphyResponse.data[0].url" alt="">
        
        //giphyResults.getElementById('src', newGiphyResponse.data[0].url)

// create an image tag set source to results in line 23 - console.log(newGiphyResponse.data[0].url
        // give it a class to style w/ css
        // use giphyresults from line 5 and append what i just created to giphy result