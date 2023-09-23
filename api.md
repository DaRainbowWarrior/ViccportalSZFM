# API

### GET 
- `/users` gives back all users in database
    
    ```
    {
        "_id",
        "username",
        "email"
    }
    ```
- `/jokes` gives back all jokes in database
    ```
    {
        "likes"
        "dislikes"
        "_id",
        "author",
        "title",
        "description",
        "tags"
    }
    ```
### POST
- `/jokes` creates a joke

Post Body:
```
{
    "title",
    "description",
    "author" --Optional
}
```

- `/auth/register` creates a user

Post Body:
```
    {
        "email",
        "password"
    }
```

- `/auth/login` logs in a user
    - when a user logs in, a `J-AUTH` cookie gets stored, that allows a user to create a joke, and delete his account if wanted to
```
{
    "authentication": {
        "password",
        "salt",
        "sessionToken"
    },
    "_id",
    "username",
    "email",
    "__v"
}
```