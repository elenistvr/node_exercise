# Development environment

In order to run application use:
      `docker-compose up`


# Backend

## Feed the Database

In order to feed the database with data you can make a POST request to http://localhost:3000/feedDB 
In the body you add the seeds.xlsx file 
E.g using Postman you can select in Body, the form-data, where in key field, you put "file" of type File and in value you upload the seeds.xlsx file.

## Retrieve the users based on set of parameters

In order to retrieve the users you can make a GET request to http://localhost:3000/users and get all users, also you can use as parameters id, name, surname, birthday, gender, username, 
e.g http://localhost:3000/users?id=4 

or combine parameters
e.g http://localhost:3000/users?id=3&username=username3

## Retrieve all of the messages that two users have exchanged, ordered by the most recent sent.

In order to retrieve these messages you make a GET request to e.g http://localhost:3000/exchangedMessages where sender amd receiver are parameters 
e.g http://localhost:3000/exchangedMessages?sender=2&receiver=9


## Retrieve a list of users, sorted by the most recent message that has been exchanged between a user requested and the rest of the users 

In order to retrieve this list you make GET request to http://localhost:3000/listOfUsers where userId is the param
e.g http://localhost:3000/listOfUsers?userId=2


## Frontend 

## Frontend runs on http://localhost:5173/

It was created using React and Redux
- At first there is a dropdown menu where you can select a main user
- Then you can see the list of users, sorted by the most recent message that has been exchanged between the main user and the rest of the users 
- When you click at a user from the list, a conversation area appears where you can see the messages that have been exhanged between the main user and the selected user from the list, ordered by the most recent sent 


this repository has the node_exercise file, that is the backend, inside this file there is a folder called frontend and it is the frontend,
also the node_modules are included