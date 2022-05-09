
# Task Manager API

A REST API for creating and managing tasks for users.


## How to Use?

You will have the best experience if you use Postman to send the requests.

Every user has to create a profile first to use the API. After creating a profile, you will recieve a bearer auth token in response which is used to authorize the user. Therefore when sending requests that require authentication the authorization header has to be set to 
"Bearer " + auth token recieved earlier.

#### NOTE
The tasks are not encrypted therefore an adminstrator i.e. I can read it, but be assured I don't.
The passwords however are end to end encrypted using the bcrypt library.


## API Reference

{{url}} = https://khat-task-manager-api.herokuapp.com


#### Create User

```
  POST {{url}}/users
```

| Body Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your Profile name |
| `email` | `email` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |


#### Login User

```
  POST {{url}}/users/login
```

| Body Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `email` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |


#### Logout User (Authorization required)

```
  POST {{url}}/users/logout
```


#### Logout User from all places (Authorization required)

```
  POST {{url}}/users/logoutAll
```


#### Create Tasks (Authorization required)

```
  POST {{url}}/tasks
```

| Body Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `description` | `string` | **Required**. Task description |
| `completed` | `boolean` | Task completed (true) or not (false) |


#### Get Profile Information (Authorization required)

```
  GET {{url}}/users/me
```


#### Get Profile Information by userId (Authorization required)

```
  GET {{url}}/users/{{userId}}
```


#### Get all your Tasks (Authorization required)

```
  GET {{url}}/tasks
```

| Parameters | value     | Description                |
| :-------- | :------- | :------------------------- |
| `sortBy` | `{{attr}}:descending or {{attr}}:ascending` | Obtain the tasks in sorted order |

Example: 
    
    GET {{url}}/tasks?sortBy=createdAt:descending
    
    //Returns tasks, which are sorted in descending order
    //of when they were created.


#### Get a Task by taskId (Authorization required)

```
  GET {{url}}/tasks/{{taskId}}
```


#### Update User Information (Authorization required)

```
  PATCH {{url}}/users/me
```

| Body Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `age` | `Integer` | Update the age |
| `name` | `string` | Update the name |
| `password` | `string` | Update the password |
| `email` | `email` | Update the email |


#### Update Task Information (Authorization required)

```
  PATCH {{url}}/tasks/{{taskId}}
```

| Body Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `description` | `string` | Update the task description |
| `completed` | `boolean` | Update the task status |


#### Delete User (Authorization required)

```
  DELETE {{url}}/users/me
```
- Deletes the current user profile.


#### Delete Task by taskId (Authorization required)

```
  DELETE {{url}}/tasks/{{taskId}}
```
- Deletes the task with the taskId if the requesting user had created it.



## JS Packages used

 - [Expressjs](https://expressjs.com/)
 - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 - [JsonWebToken (JWT)](https://www.npmjs.com/package/jsonwebtoken)
 - [MongoDB](https://www.npmjs.com/package/mongodb)
 - [Mongoose](https://www.npmjs.com/package/mongoose)
 - [Multer](https://www.npmjs.com/package/multer)
 - [NodeMailer](https://www.npmjs.com/package/nodemailer)
 - [Sharp](https://www.npmjs.com/package/sharp)
 - [Validator](https://www.npmjs.com/package/validator)
