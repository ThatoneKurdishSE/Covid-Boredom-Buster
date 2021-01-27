const backendURL = 'http://localhost:9000'
const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const $activitySelect = document.querySelector("#activity-type")
const $activityDisplay = document.querySelector("#display-activity")
const $signInForm = document.querySelector("#sign-in-form")
const $postForm = document.querySelector("#post-form")
const $activitySelectForm = document.querySelector("#activity-select-form")
const $activityButton = document.querySelector("#get-button")
const $logOutButton = document.querySelector("#log-out")
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

    const postParams = `${makeSaveParams(activity)}&userID=${userID}`
    $postForm.classList.remove('hidden')
    $postForm.action = `${backendURL}/activities?${postParams}`
}

function welcomeUser(user){
    $signInForm.classList.add('hidden')
    $userName = document.querySelector('#user-name')
    $userName.textContent = `Welcome ${user.name}!`
    $logOutButton.classList.remove("hidden")
    $activitySelectForm.classList.remove("hidden")
}

$activityButton.addEventListener('click', (event) => {
    activityType = $activitySelect.value
    fetch(`${backendURL}/getActivity?type=${activityType}`)
        .then(response => response.json())
        .then(activity => {
            displayActivity(activity)
        })
})

function makeSaveParams(activity){
    let params = ""
    for (let key in activity){
        params += `${key}=${activity[key]}&`
    }
    params = params.replace(/\s/g,"%20")
    return params
}

setActivityOptions()

$logOutButton.addEventListener('click', (event) => {
    window.location.replace("/")
})