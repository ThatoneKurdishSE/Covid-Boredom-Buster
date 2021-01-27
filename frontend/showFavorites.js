const $favoritesContainer = document.querySelector("#display-favorites")
const queryParams = new URLSearchParams(window.location.search)
const userId = 3

// queryParams.get('id')

fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(user =>{
        user.activities.forEach(activity=>{
            console.log(activity)
                const h1 = document.createElement('h1')
                const h2 = document.createElement('h2')
                const h3 = document.createElement('h3')
                const h4 = document.createElement('h4')
                const div = document.createElement('div')
                div.classList.add("Activity-card")
        //         const h5 = document.createElement('h5')

                    h1.textContent = activity.name
                    h2.textContent = `Accessibility level: ${activity.accessibility}`
                    h3.textContent = `Price: ${activity.price}`
                    h4.textContent = `Number of participants: ${activity.participants}`
        //             h5.textContent = activity.type
                    div.append(h1, h2, h3, h4)
                    $favoritesContainer.append(div)
        })
    })