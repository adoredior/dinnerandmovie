 // set HTML elements to variables for meal info
 let mealDescription = document.getElementById("mealName");
 let mealCat = document.getElementById("mealCategory");
 let mealImage = document.getElementById("mealImg");
 let mealRecipe = document.getElementById("mealLink");
 
 // async function containing fetch call to meal API
async function randomMeal() {
    try{
   const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   const data =  await response.json()
//once function is called the CSS of these HTML elements is changed
   document.getElementById("card-container").style.visibility = "visible";
   document.getElementById("mealz").style.height = "100%";
   document.getElementById("mealImg").style.marginTop = "3em";
   document.getElementById("lucky").innerHTML = "Here's what we found for you!";
   document.getElementById("randomize").innerHTML = "Not what you wanted? Click again!";


// takes the data from the fetch call and puts it into an object conataining desired info to display on screen
   let mealInfo = {
    mealName: data.meals[0].strMeal,
    mealCategory: data.meals[0].strCategory,
    mealImage: data.meals[0].strMealThumb,
    mealInstructions: data.meals[0].strYoutube,
    }
    
    console.log(mealInfo)

    //once function is called the inner HTML is changed to data from within the object
     mealImage.innerHTML = `<img src=${mealInfo.mealImage}>`
     mealDescription.innerHTML = `${mealInfo.mealName}`
     mealCat.innerHTML = `Category:  ${mealInfo.mealCategory}`
     mealRecipe.innerHTML= `<a href=${mealInfo.mealInstructions} target="_blank">Recipe</a>`

     
     
    
  }
  //logs the error if fetch call cannot be completed
catch (error) {
console.log(error)
}
}






// object containing headers for fetch call
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};



//function containing fetch call for the movie API
async function randomMovie() {
// creates variables for HTML elements for movie API
 let movieImg = document.getElementById("movieImage");
 let title = document.getElementById("title");
 let rating = document.getElementById("rank");
 let releaseYear = document.getElementById("year");
 let trailer = document.getElementById("trailer");
// creates a random number and asign it to a variable
  let number = Math.floor(Math.random() * 100)

  fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${number}`, options)
	.then(response => response.json())

	.then(data => {
//puts data from movie fetch call into an object with desired info
    movieInfo = {
      title: data.title,
      rank: data.rank,
      year: data.year,
      poster: data.image,
      trailer: data.trailer,
    }
    
    console.log(movieInfo)
//innerHTML of variables is changed to desired data to be displayed
    movieImg.innerHTML = `<img  id ="poster" src=${movieInfo.poster}>`;
    title.innerHTML = `${movieInfo.title}`;
    rating.innerHTML = `IMBD Rank: ${movieInfo.rank}`;
    releaseYear.innerHTML = `Realeased: ${movieInfo.year}`
    trailer.innerHTML = `<a href=${movieInfo.trailer} target="_blank">Trailer</a>`

  })
//logs error if fetch call cannot be completed
	.catch(err => console.error(err));
}

// let mealButtonClicked = false;
// let movieButtonClicked = false;

// function mealButtonLock () {
//   mealButtonClicked = true;
//   console.log(mealButtonClicked)
// }

// function movieButtonLock () {
//   movieButtonClicked = true;
//   console.log(movieButtonClicked)
// }

// function randomize () {
//   if (mealButtonClicked == false && movieButtonClicked == false) {
//     randomMovie();
//     randomMeal();
//     console.log("Both functions will run!")
//   } else if (mealButtonClicked == false && movieButtonClicked == true) {
//     randomMeal();
//     console.log("Only the meal function will run ")
//   } else if (mealButtonClicked == true && movieButtonClicked == false) {
//     randomMovie();
//     console.log("Only the movie function will run")
//   } else if (mealButtonClicked == true && movieButtonClicked == true) {
//     console.log("Neither will run.")
//   }

// }