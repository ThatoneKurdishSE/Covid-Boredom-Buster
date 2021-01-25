# Covid-Boredom-Buster

MVP:
Making a call to the API and displaying a random activity- save

Additional Features:
Select by Type
Save Activity to favorites list (separate page to display)
Update activity on favorites list
Delete activity on favorites list
Filter Favorites by type
Fancy Styling


Activity class
"activity": string
	"accessibility": float
	"type": string
	"participants": integer
	"price": float
	"key": integer



User class
	Name: string


Favorite class
user_id: references
activity_id: references



Building an app using an existing api called "Bored". This app will ideally have all of the CRUD features by the time we're finished!
