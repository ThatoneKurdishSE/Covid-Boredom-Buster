const backendURL = 'http://localhost:9000'
const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const $activitySelect = document.querySelector("#activity-type")
const $activityDisplay = document.querySelector("#display-activity")
const $signInForm = document.querySelector("#sign-in-form")
const queryParams = new URLSearchParams(window.location.search)
const activityType = queryParams.get('type')

function setActivityOptions(){
    activityTypes.forEach(activity => {
        const $activityOption = document.createElement('option')
        $activityOption.textContent = activity
        $activitySelect.appendChild($activityOption)
    })
}

if (activityType){
    fetch(`${backendURL}/getActivity?type=${activityType}`)
        .then(response => response.json())
        .then(activity => {
            displayActivity(activity)
            setActivityOptions()
        })
}

function displayActivity(activity){
    $activityName = document.querySelector('#activity-name')
    $activityType = document.querySelector('#activity-type')
    $activityParticipants = document.querySelector('#participants')
    $activityPrice = document.querySelector('#price')
    $activityAccessibility = document.querySelector('#accessibility')

    $activityName.textContent = `Activity: ${activity.activity}`
    $activityType.textContent = `Type: ${activity.type}`
    $activityParticipants.textContent = `Number of Participants: ${activity.participants}`
    $activityPrice.textContent = `Price: ${activity.price}`
    $activityAccessibility.textContent = `Accessbility Rating: ${activity.accessibility}`
}



setActivityOptions()