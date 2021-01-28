const $pics = [{type: "education",
            url: "https://images.unsplash.com/photo-1604549944235-3e5579b15cc2?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"},
            {type: "recreational",
            url: "https://images.unsplash.com/photo-1506259653509-a66773d90d05?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"},
            {type: "social",
            url: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"}, 
            {type: "diy",
            url: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"},
            {type: "charity",
            url: "https://images.unsplash.com/photo-1605767576272-cb9b834aa4be?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"},
            {type: "cooking",
            url: "https://images.unsplash.com/photo-1608019527897-238a401a7b7c?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"}, 
            {type: "relaxation",
            url: "https://images.unsplash.com/photo-1611512364108-fa02a6d7dd93?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"}, 
            {type: "music",
            url: "https://images.unsplash.com/photo-1610981755415-3f7c9202cccb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"}, 
            {type: "busywork",
            url: "https://images.unsplash.com/photo-1535057866921-a768e391e410?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"}]
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
                const name = document.createElement('h2')
                const access = document.createElement('h4')
                const price = document.createElement('h4')
                const part = document.createElement('h4')
                const type = document.createElement('h4')
                const div = document.createElement('div')
                div.classList.add("Activity-card")
                div.id = favorite.id
                

                    name.textContent = favorite.activity.name
                    access.textContent = `Accessibility level: ${favorite.activity.accessibility}`
                    price.textContent = `Price: ${favorite.activity.price}`
                    part.textContent = `Number of participants: ${favorite.activity.participants}`
                    type.textContent = favorite.activity.activity_type
                    $delButton =  addDeleteButton(favorite, div)
                    div.append(name, access, price, part, type, $delButton)
                    $favoritesContainer.append(div)
                    setCardImage(favorite)
                    $backLink.href = `/?name=${userName}`
                    
        })
    })

function addDeleteButton(favorite, div){
    const $delButton = document.createElement('button')
    $delButton.textContent = "Delete"
    $delButton.addEventListener('click', (event) => {
        div.remove()
        fetch(`http://localhost:9000/favorites/${favorite.id}`, {
            method: 'DELETE'
        })
    })
    return $delButton
}

function setCardImage(favorite){
    const image = $pics.find(picObject => picObject.type === favorite.activity.activity_type)
    document.getElementById(favorite.id).style.backgroundImage = `url(${image.url})`

}