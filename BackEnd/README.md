# User Authentication API

This API provides endpoints for user registration and login.

## Endpoints

### 1. Register User

**URL**: `/user/register`

**Method**: `POST`

**Description**: Registers a new user.

**Request Body**:
```json
{
    "email": "john.doe@example.com",
    "password": "yourpassword"
}
```

**Response Body**:
```json
{
    "user": {
        "_id": "user_id",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "jwt_token"
}
```
````


