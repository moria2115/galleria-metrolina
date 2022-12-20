import { pictures } from "./data/pictures.js";
displayPictures(pictures);

function displayPictures(arr) {
    let index = 0;
    for (let picture of arr) {
        document.getElementById("imgCards").innerHTML +=
            `<div class="col-md-4">
            <div class="card mb-3" style= "height: 30rem;">
  <img data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="showImages(${index})" style= "height: 15rem;" src="${picture.getImage("imageUrl")}" class="card-img-top" alt="${picture.getName("name")}">
  <div class="card-body text-center">
    <h5 class="card-title display-6">${picture.getName("name")}</h5>
    <p class="card-text">${picture.getArtist("artist")}</p>
    <p class="card-text"><strong>${picture.getPrice("price")}</strong></p>
    <p class="card-text"><small>${picture.getStock("stock")}</small></p>
  </div>
  </div>
</div>`
    }
    index++;
}

window.showImages = function showImages(index) {
    document.getElementById('element').src = pictures[index].getImage("imageUrl");
}

// window.searchPicture = function searchPicture() {
//     let nameForSearch = document.getElementById("searchInput").value;
//     console.log(nameForSearch);
//     for (let picture of pictures) {
//         pictures = pictures.find(picture.getName("name").includes(nameForSearch))
//         // if (picture.getName("name").includes(nameForSearch)) {
//         document.getElementById("imgCards").innerHTML += `<div class="card bg-dark text-white col-md-4">
//         <img class="card-img" style="width: 171px; height: 162px;" src="${picture.getImage("imageUrl")}" alt="Card image">
        
//         <h5 class="card-title">${picture.getName("name")}</h5>
//         </div>`
//         // } else {
//         //     document.getElementById("imgCards").innerHTML = "Image Not Found, Please Try Again."
//         // }
//     }
// }

