# API

## Routes

### GET

- `/users/:id` gives back user of `id`

```javascript
{
    "_id":,
    "username",
    "email"
}
```

- `/users` gives back all users in database

```javascript
{
    "_id",
    "username",
    "email"
}
```

- `/jokes` gives back all jokes in database

```javascript
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

- `/jokes/user/:id` gives back all jokes made by user of `id`

### POST

- `/jokes` creates a joke, only logged in users can create posts

Post Body:

```javascript
{
    "title",
    "description",
    "author" --Optional,
    "tags" --Optional
}
```

- `/jokes/:id/rate` gives a joke a like/dislike, only logged in users can rate

Post Body:

```json
{
    "ratingType" --Acceptable value: "like" or "dislike"
}
```

- `/auth/register` creates a user

Post Body:

```javascript
    {
        "email",
        "password"
    }
```

- `/auth/login` logs in a user
  - when a user logs in, a `J-AUTH` cookie gets stored, that allows a user to create a joke, and delete his account if wanted to

```javascript
{
    "authentication": {
        "password",
        "salt",
        "sessionToken"
    },
    "_id",
    "username",
    "email"
}
```
