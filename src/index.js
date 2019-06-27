console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
    fetchBreedsByLetter()
})

function fetchDogs() {
    return fetch(imgUrl)
        .then (resp => resp.json())
        .then (dogPics => renderDogs(dogPics));
}

function renderDogs(dogPics){
    let dogDiv = document.querySelector('#dog-image-container')

    for (let element of dogPics['message']) {
        let p = document.createElement('p')
        p.innerHTML = `<img src="${element}">`
        dogDiv.appendChild(p)
      }
}

function fetchBreeds() {
    return fetch(breedUrl)
        .then (resp => resp.json())
        .then (dogBreeds => renderBreedList(dogBreeds));
}

function renderBreedList(dogBreeds) {
    // debugger
    let breedUl = document.querySelector('#dog-breeds')
    // debugger
    for (const element in dogBreeds['message']) {
        let li = document.createElement('li')      
        li.innerHTML = element 
        breedUl.appendChild(li)
        li.addEventListener("click", function(){
            if (this.style.color == 'red'){
                this.style.color = 'black'
            } else {
                this.style.color = 'red'
            }
        }   
        )
      }
}

function fetchBreedsByLetter() {
    return fetch(breedUrl)
        .then (resp => resp.json())
        .then (dogBreeds => doggieDropDown(dogBreeds));
}

function doggieDropDown(dogBreeds){
    
    let selectLetter = document.querySelector("#breed-dropdown")
    selectLetter.addEventListener('change', f => {
        let letter = selectLetter.value
        console.log(letter)

        let breedUl = document.querySelector('#dog-breeds')
        document.querySelector("#dog-breeds").innerHTML = "";

            for (const element in dogBreeds['message']) {
            let li = document.createElement('li') 
                
                if (element.charAt(0) == letter){
                    li.innerHTML = element 
                    breedUl.appendChild(li)
                }
            }
    })
}
