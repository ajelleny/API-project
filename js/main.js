
const button = document.querySelector('button')

const giphyImage = document.createElement('img');
giphyImage.setAttribute('class', "giphyImage") 

const gifImage = document.getElementById('gif-image')


button.addEventListener('click', (evt) => {
    let search = document.getElementById("search").value
    giphyImage.src = ""

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=v6BNp1B7ZvukCjJTE76IuyD9cQXsl3d4&q=${search}&limit=1`)
    .then((giphyResponse) => {
        return giphyResponse.json();
    })
    .then((newGiphyResponse) => {
        giphyImage.src = newGiphyResponse.data[0].images.original.url 
        gifImage.appendChild(giphyImage)
        
   
    })

})



