# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
COVID boredom buster

https://www.boredapi.com/documentation

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
