const backendURL = 'http://localhost:9000'
const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const $activitySelect = document.querySelector("#activity-type")
const $activityDisplay = document.querySelector("#display-activity")
const $signInForm = document.querySelector("#sign-in-form")

const $activityButton = document.querySelector("#get-button")
const queryParams = new URLSearchParams(window.location.search)
const userName = queryParams.get('name')
let userID = null

function setActivityOptions(){
    activityTypes.forEach(activity => {
        const $activityOption = document.createElement('option')
        $activityOption.textContent = activity
        $activitySelect.appendChild($activityOption)
    })
}

if (userName){
    fetch(`${backendURL}/userLogin?name=${userName}`)
        .then(response => response.json())
        .then(user => {
            welcomeUser(user)
            userID = user.id
            console.log(user)
    })
}

function displayActivity(activity){
    $activityName = document.querySelector('#activity-name')
    $activityType = document.querySelector('#act-type')
    $activityParticipants = document.querySelector('#participants')
    $activityPrice = document.querySelector('#price')
    $activityAccessibility = document.querySelector('#accessibility')

    $activityName.textContent = `Activity: ${activity.activity}`
    $activityType.textContent = `Type: ${activity.type}`
    $activityParticipants.textContent = `Number of Participants: ${activity.participants}`
    $activityPrice.textContent = `Price: ${activity.price}`
    $activityAccessibility.textContent = `Accessbility Rating: ${activity.accessibility}`
}

function welcomeUser(user){
    $signInForm.classList.add('hidden')
    $userName = document.querySelector('#user-name')
    $userName.textContent = `Welcome ${user.name}!`
}

$activityButton.addEventListener('click', (event) => {
    activityType = $activitySelect.value
    fetch(`${backendURL}/getActivity?type=${activityType}`)
        .then(response => response.json())
        .then(activity => {
            console.log(activity)
            displayActivity(activity)
        })
})

setActivityOptions()