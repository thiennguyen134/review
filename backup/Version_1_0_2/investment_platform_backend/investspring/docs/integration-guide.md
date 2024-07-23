
---

## Integration Guide

### Table of Contents
1. Overview
2. Backend Project Structure
3. Purpose of Each Class
4. Common Errors and How to Avoid Them
5. Data Flow
6. API Endpoints and Testing
7. Integrating with React Frontend
8. Additional Considerations

### 1. Overview
This guide provides comprehensive instructions for integrating the backend with the frontend, including testing the backend API using Postman and integrating it with a React frontend.

### 2. Backend Project Structure

```
investment-platform-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── investspring/
│   │   │           ├── InvestspringApplication.java
│   │   │           ├── config/
│   │   │           │   └── SecurityConfig.java
│   │   │           ├── controller/
│   │   │           │   └── UserController.java
│   │   │           ├── exception/
│   │   │           │   ├── GlobalExceptionHandler.java
│   │   │           │   └── UserAlreadyExistsException.java
│   │   │           ├── model/
│   │   │           │   ├── User.java
│   │   │           │   ├── Role.java
│   │   │           │   ├── Customer.java
│   │   │           │   ├── CustomerProfile.java
│   │   │           │   ├── Address.java
│   │   │           │   └── Contact.java
│   │   │           ├── repository/
│   │   │           │   ├── UserRepository.java
│   │   │           │   ├── RoleRepository.java
│   │   │           │   ├── CustomerRepository.java
│   │   │           │   ├── CustomerProfileRepository.java
│   │   │           │   ├── AddressRepository.java
│   │   │           │   └── ContactRepository.java
│   │   │           ├── service/
│   │   │           │   ├── UserService.java
│   │   │           │   ├── CustomerService.java
│   │   │           │   ├── AuthService.java
│   │   │           │   ├── CustomUserDetailsService.java
│   │   │           │   └── CustomUserDetails.java
│   │   │           ├── security/
│   │   │           │   ├── CustomAuthenticationSuccessHandler.java
│   │   │           │   └── CustomAuthenticationFailureHandler.java
│   │   │           ├── dto/
│   │   │           │   ├── UserDTO.java
│   │   │           │   └── CustomerDTO.java
│   └── resources/
│       └── application.properties
├── docs/
│   └── integration-guide.md
└── pom.xml
```

### 3. Purpose of Each Class

#### `config/`
- **SecurityConfig.java**: Configures security settings, such as authentication and authorization mechanisms.

#### `controller/`
- **UserController.java**: Manages API endpoints related to user operations, such as registration and login.

#### `exception/`
- **GlobalExceptionHandler.java**: Handles global exceptions and provides meaningful error responses.
- **UserAlreadyExistsException.java**: Custom exception thrown when a user already exists during registration.

#### `model/`
- **User.java**: Represents the user entity.
- **Role.java**: Represents the role entity.
- **Customer.java**: Represents the customer entity.
- **CustomerProfile.java**: Represents the customer profile entity.
- **Address.java**: Represents the address entity.
- **Contact.java**: Represents the contact entity.

#### `repository/`
- **UserRepository.java**: Repository interface for user-related database operations.
- **RoleRepository.java**: Repository interface for role-related database operations.
- **CustomerRepository.java**: Repository interface for customer-related database operations.
- **CustomerProfileRepository.java**: Repository interface for customer profile-related database operations.
- **AddressRepository.java**: Repository interface for address-related database operations.
- **ContactRepository.java**: Repository interface for contact-related database operations.

#### `service/`
- **UserService.java**: Provides business logic for user operations.
- **CustomerService.java**: Provides business logic for customer operations.
- **AuthService.java**: Provides authentication-related services.
- **CustomUserDetailsService.java**: Loads user-specific data for authentication.
- **CustomUserDetails.java**: Custom user details implementation for Spring Security.

#### `security/`
- **CustomAuthenticationSuccessHandler.java**: Handles actions upon successful authentication.
- **CustomAuthenticationFailureHandler.java**: Handles actions upon failed authentication.

#### `dto/`
- **UserDTO.java**: Data Transfer Object for user data.
- **CustomerDTO.java**: Data Transfer Object for customer data.

### 4. Common Errors and How to Avoid Them

#### Duplicate `passwordEncoder` Bean Definition
- Ensure that only one `passwordEncoder` bean is defined across all configuration classes.

#### Circular Dependency Issues
- Use constructor injection and `@Lazy` where necessary to break circular dependencies.

#### BeanDefinitionOverrideException
- Avoid defining beans that are already defined by Spring Security, such as `authenticationManagerBuilder`.

### 5. Data Flow

1. **User Registration**: The client sends a registration request to the `UserController`, which calls the `UserService` to save the user. The user details are saved in the database via the `UserRepository`.
2. **User Login**: The client sends a login request, which is handled by Spring Security. The `CustomUserDetailsService` loads the user details, and upon successful authentication, `CustomAuthenticationSuccessHandler` is triggered.
3. **Add Investment**: The client sends an investment request to the relevant controller, which processes and saves the investment details in the database.

### 6. API Endpoints and Testing

#### API Endpoints

- **Register User**: `POST /api/users/register`
- **Login**: `POST /login`
- **Add Investment**: `POST /api/investments/add`
- **Get User Investments**: `GET /api/investments/user/{userId}`

#### Testing with Postman

##### Register User
1. **Endpoint**: `POST /api/users/register`
2. **Request Body**:
    ```json
    {
        "username": "newuser",
        "password": "password123"
    }
    ```
3. **Expected Response**: 201 Created
    ```json
    {
        "id": 1,
        "username": "newuser"
    }
    ```

##### Login
1. **Endpoint**: `POST /login`
2. **Request Body**:
    ```json
    {
        "username": "newuser",
        "password": "password123"
    }
    ```
3. **Expected Response**: 200 OK
    ```json
    {
        "message": "Login successful"
    }
    ```

##### Add Investment
1. **Endpoint**: `POST /api/investments/add`
2. **Request Body**:
    ```json
    {
        "userId": 1,
        "investmentType": "Stocks",
        "amount": 1000
    }
    ```
3. **Expected Response**: 201 Created
    ```json
    {
        "investmentId": 1,
        "userId": 1,
        "investmentType": "Stocks",
        "amount": 1000
    }
    ```

##### Get User Investments
1. **Endpoint**: `GET /api/investments/user/{userId}`
2. **Request Parameters**: Replace `{userId}` with the actual user ID, e.g., `1`
3. **Expected Response**: 200 OK
    ```json
    [
        {
            "investmentId": 1,
            "userId": 1,
            "investmentType": "Stocks",
            "amount": 1000
        }
    ]
    ```

### 7. Integrating with React Frontend

#### Fetch API Example

Create a `services` directory in your React project and add `apiService.js` to manage API calls.

```javascript
// src/services/apiService.js

const API_BASE_URL = 'http://localhost:8080/api';

export const registerUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return response.json();
};

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return response.json();
};

export const addInvestment = async (userId, investmentType, amount) => {
    const response = await fetch(`${API_BASE_URL}/investments/add`, {
        method: 'POST',
        headers: {
           

 'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, investmentType, amount })
    });
    return response.json();
};

export const getUserInvestments = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/investments/user/${userId}`);
    return response.json();
};
```

#### React Component Example

Create a `components` directory and add `Register.js` and `Login.js` to handle user registration and login.

##### Register.js

```javascript
// src/components/Register.js

import React, { useState } from 'react';
import { registerUser } from '../services/apiService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(username, password);
            setMessage(`User ${response.username} registered successfully!`);
        } catch (error) {
            setMessage('Registration failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Register</button>
            <p>{message}</p>
        </form>
    );
};

export default Register;
```

##### Login.js

```javascript
// src/components/Login.js

import React, { useState } from 'react';
import { loginUser } from '../services/apiService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(username, password);
            setMessage(response.message);
        } catch (error) {
            setMessage('Login failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    );
};

export default Login;
```

### 8. Additional Considerations

- **Error Handling**: Ensure proper error handling in both backend and frontend.
- **Authentication**: Implement JWT or session management for secured endpoints.
- **Frontend Integration**: Test the integration thoroughly with real user scenarios and edge cases.

By following this guide, you ensure that your backend API is properly tested and integrated with the React frontend, providing a robust and user-friendly experience.

---
