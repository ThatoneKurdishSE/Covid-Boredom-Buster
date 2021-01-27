const $favoritesContainer = document.querySelector("#display-favorites")
const $backLink = document.querySelector("#back-link")
const queryParams = new URLSearchParams(window.location.search)
const userId = queryParams.get('id')
let userName = null

fetch(`http://localhost:9000/users/${userId}`)
    .then(response => response.json())
    .then(user =>{
        userName = user.name
        user.favorites.forEach(favorite=>{
                const h1 = document.createElement('h1')
                const h2 = document.createElement('h2')
                const h3 = document.createElement('h3')
                const h4 = document.createElement('h4')
                const div = document.createElement('div')
                div.classList.add("Activity-card")
                const h5 = document.createElement('h5')

                    h1.textContent = favorite.activity.name
                    h2.textContent = `Accessibility level: ${favorite.activity.accessibility}`
                    h3.textContent = `Price: ${favorite.activity.price}`
                    h4.textContent = `Number of participants: ${favorite.activity.participants}`
                    h5.textContent = favorite.activity.type
                   $delButton =  addDeleteButton(favorite, div)
                    div.append(h1, h2, h3, h4, h5, $delButton)
                    $favoritesContainer.append(div)
                    
                    $backLink.href = `/?name=${userName}`
                    
        })
    })

function addDeleteButton(favorite, div){
    const $delButton = document.createElement('button')
    $delButton.textContent = "Delete Activity 😿"
    $delButton.addEventListener('click', (event) => {
        div.remove()
        fetch(`http://localhost:9000/favorites/${favorite.id}`, {
            method: 'DELETE'
        })
    })
    return $delButton
}