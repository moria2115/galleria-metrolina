import { pictures } from "./data/pictures.js";
displayPictures(pictures);

function displayPictures(arr) {
    for (let picture of arr) {
        document.getElementById("imgCards").innerHTML +=
            `<div class="card" style="width: 20rem;">
  <img style= "height: 15rem;" src="${picture.getImage("imageUrl")}" class="card-img-top mx-auto" alt="${picture.getName("name")}">
  <div class="card-body">
    <h3 class="card-text text-center">${picture.getName("name")}</h3>
    <h4 class="card-text text-center">${picture.getArtist("artist")}</h4>
    <h5 class="card-text text-center">${picture.getPrice("price")}</h5>
    <p class="card-text text-center">${picture.getStock("stock")}</p>

  </div>
</div>`
    }
}

window.searchPicture = function searchPicture() {
    let nameForSearch = document.getElementById("searchInput").value;
    console.log(nameForSearch);
    for (let picture of pictures) {
        pictures = pictures.find(picture.getName("name").includes(nameForSearch))
        // if (picture.getName("name").includes(nameForSearch)) {
        document.getElementById("imgCards").innerHTML += `<div class="card bg-dark text-white col-md-4">
        <img class="card-img" style="width: 171px; height: 162px;" src="${picture.getImage("imageUrl")}" alt="Card image">
        
        <h5 class="card-title">${picture.getName("name")}</h5>
        </div>`
        // } else {
        //     document.getElementById("imgCards").innerHTML = "Image Not Found, Please Try Again."
        // }
    }
}

