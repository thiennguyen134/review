### Document for Integrating React Frontend with Spring Boot Backend

This document provides detailed steps to integrate a React frontend with a Spring Boot backend, ensuring proper error handling and seamless API communication. The project includes user registration functionality with validation.

### React + TypeScript + CSS Modules (InvestGuard)

#### Commands

1. **Create React App with TypeScript Template**
   ```bash
   npx create-react-app investguard --template typescript
   ```

2. **Start React App**
   ```bash
   npm start
   ```

3. **Install Axios**
   ```bash
   npm install axios
   ```

#### Project Structure

##### Spring Boot Backend

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── investspring/
│   │           ├── InvestspringApplication.java
│   │           ├── controller/
│   │           │   └── UserController.java
│   │           ├── exception/
│   │           │   ├── GlobalExceptionHandler.java
│   │           │   └── UserAlreadyExistsException.java
│   │           ├── model/
│   │           │   └── User.java
│   │           ├── repository/
│   │           │   └── UserRepository.java
│   │           └── service/
│   │               └── UserService.java
│   └── resources/
│       └── application.properties
```

##### React Frontend

```
investment-platform-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Login.module.css
│   │   │   └── Register.module.css
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Dashboard.module.css
│   │   │   └── Profile.module.css
│   │   ├── investments/
│   │   │   ├── InvestmentList.tsx
│   │   │   ├── InvestmentDetail.tsx
│   │   │   ├── InvestmentList.module.css
│   │   │   └── InvestmentDetail.module.css
│   │   ├── portfolio/
│   │   │   ├── PortfolioList.tsx
│   │   │   ├── PortfolioDetail.tsx
│   │   │   ├── PortfolioList.module.css
│   │   │   └── PortfolioDetail.module.css
│   │   ├── transactions/
│   │   │   ├── TransactionList.tsx
│   │   │   ├── TransactionForm.tsx
│   │   │   ├── TransactionList.module.css
│   │   │   └── TransactionForm.module.css
│   │   ├── reports/
│   │       ├── Report.tsx
│   │       ├── Analytics.tsx
│   │       ├── Report.module.css
│   │       └── Analytics.module.css
│   │   ├── shared/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Main.tsx
│   │   │   ├── Main.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   ├── hooks/
│   │   ├── useFormValidation.ts
│   ├── services/
│   │   ├── AuthService.ts
│   │   ├── InvestmentService.ts
│   │   ├── PortfolioService.ts
│   │   ├── TransactionService.ts
│   │   └── ReportService.ts
│   ├── utils/
│   │   ├── AuthUtil.ts
│   │   └── ApiUtil.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── styles/
│       └── main.css
├── config-overrides.js
└── package.json
```

### Step-by-Step Guide

#### Step 1: Set Up Spring Boot Backend

1. **Create User Entity**
   - File: `User.java`
   - Directory: `src/main/java/com/investspring/model/`

2. **Create User Repository**
   - File: `UserRepository.java`
   - Directory: `src/main/java/com/investspring/repository/`

3. **Create User Service**
   - File: `UserService.java`
   - Directory: `src/main/java/com/investspring/service/`

4. **Create User Controller**
   - File: `UserController.java`
   - Directory: `src/main/java/com/investspring/controller/`

5. **Create Global Exception Handler**
   - File: `GlobalExceptionHandler.java`
   - Directory: `src/main/java/com/investspring/exception/`

6. **Create Custom Exception**
   - File: `UserAlreadyExistsException.java`
   - Directory: `src/main/java/com/investspring/exception/`

7. **Configure CORS**
   - File: `WebConfig.java`
   - Directory: `src/main/java/com/investspring/`

#### Step 2: Set Up React Frontend

1. **Install Required Packages**
   ```bash
   npm install axios react-app-rewired customize-cra node-polyfill-webpack-plugin
   ```

2. **Update `package.json` Scripts**
   - Update the `scripts` section of `package.json` to use `react-app-rewired`.

3. **Create `config-overrides.js`**
   - File: `config-overrides.js`
   - Directory: Root directory of the frontend project

4. **Create `useFormValidation.ts` Hook**
   - File: `useFormValidation.ts`
   - Directory: `src/hooks/`

5. **Create `Main.tsx` Component**
   - File: `Main.tsx`
   - Directory: `src/components/shared/`

### Running the Application

1. **Start the Spring Boot Backend:**
   ```bash
   ./mvnw spring-boot:run
   ```

2. **Start the React Frontend:**
   ```bash
   npm start
   ```

### Conclusion

By following this guide, you will have a Spring Boot backend that handles user registration and a React frontend that communicates with the backend via API calls. This setup ensures proper error handling and seamless integration between the frontend and backend.

---

### Storage Instructions

- Place this document in the `docs` directory of your frontend project.
- Name the file `integration-guide.md`.

### Project Structure with Documentation

```
investment-platform-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Login.module.css
│   │   │   └── Register.module.css
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Dashboard.module.css
│   │   │   └── Profile.module.css
│   │   ├── investments/
│   │   │   ├── InvestmentList.tsx
│   │   │   ├── InvestmentDetail.tsx
│   │   │   ├── InvestmentList.module.css
│   │   │   └── InvestmentDetail.module.css
│   │   ├── portfolio/
│   │   │   ├── PortfolioList.tsx
│   │   │   ├── PortfolioDetail.tsx
│   │   │   ├── PortfolioList.module.css
│   │   │   └── PortfolioDetail.module.css
│   │   ├── transactions/
│   │   │   ├── TransactionList.tsx
│   │   │   ├── TransactionForm.tsx
│   │   │   ├── TransactionList.module.css
│   │   │   └── TransactionForm.module.css
│   │   ├── reports/
│   │       ├── Report.tsx
│   │       ├── Analytics.tsx
│   │       ├── Report.module.css
│   │       └── Analytics.module.css
│   │   ├── shared/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Main.tsx
│   │   │   ├── Main.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   ├── hooks/
│   │   ├── useFormValidation.ts
│   ├── services/
│   │  

 ├── AuthService.ts
│   │   ├── InvestmentService.ts
│   │   ├── PortfolioService.ts
│   │   ├── TransactionService.ts
│   │   └── ReportService.ts
│   ├── utils/
│   │   ├── AuthUtil.ts
│   │   └── ApiUtil.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── styles/
│       └── main.css
├── config-overrides.js
├── package.json
└── docs/
    └── integration-guide.md
```