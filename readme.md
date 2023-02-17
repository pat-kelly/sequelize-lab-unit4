# Sequelize Penguin API
This API allows you to perform CRUD operations on a database of Penguins!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Penguin

**Method**: ```POST```

**Endpoint**: ```/api/penguins```

**Description**: This endpoint creates a new penguin with the provided information in the request body.

Request Body:
```
{
  "name": "Penguin mcPenguin Face",
  "age": 50,
  "breed": "Emperor"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Penguins

**Method**: GET

**Endpoint**: ```/api/penguins```

**Description**: This endpoint retrieves all the penguins stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "age": integer,
    "breed": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "habitats": [
      {
        "id": integer,
        "name": "string",
        "climate": ENUM,
        "pengId": integer,
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  },
]
```

### Update a Penguin

**Method**: ```PUT```

**Endpoint**: ```/api/penguins/:id```

**Description**: This endpoint updates the penguin with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```

Response:
```
[
  1,
  [
    {
      "id": integer,
      "name": "string",
      "age": integer,
      "breed": "string",
      "createdAt": timestamp,
      "updatedAt": timestamp
    }
  ]
]
```

### Delete a Penguin

**Method**: ```DELETE```

**Endpoint**: ```/api/penguins/:id```

**Description**: This endpoint deletes the penguin with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Add a Habitat to a Penguin

**Method**: ```POST```

**Endpoint**: ```/api/penguins/:id/habitats```

**Description**: This endpoint adds the specified habitat to a penguin with the passed in ID.

**ENUM Values**: ```'Tundra', 'Frozen Wasteland', 'Temperate Plains', 'In Captivity'```

Request Body:
```
{
  "name": "string",
  "climate": ENUM
}
```

Response:
```
[
  1,
  [
    {
      "climate": "string",
      "id": integer,
      "name": "string",
      "pengId": integer,
      "createdAt": timestamp,
      "updatedAt": timestamp
    }
  ]
]
```
