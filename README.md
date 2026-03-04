# Green Moon Savings Group API

## Overview
The Green Moon Savings Group API is designed to facilitate and manage savings group functionalities. It allows members to save and withdraw money, track contributions, and manage loans efficiently.

## Features
- **Create Savings Group**: Enables users to create a new savings group.
- **Join Savings Group**: Allows users to join an existing savings group.
- **Make Contributions**: Members can make contributions towards their savings.
- **Withdraw Funds**: Members have the ability to withdraw funds.
- **Track Loans**: Members can track loan requests and approvals.

## Endpoints
### 1. Create a Savings Group
- **POST /api/groups**  
  Body:  
  ```json
  {
      "name": "Group Name",
      "description": "Brief description of the group"
  }
  ```

### 2. Join a Savings Group
- **POST /api/groups/{groupId}/join**  
  Body:  
  ```json
  {
      "memberId": "User's ID"
  }
  ```

### 3. Make Contribution
- **POST /api/groups/{groupId}/contribute**  
  Body:  
  ```json
  {
      "amount": 100,
      "memberId": "User's ID"
  }
  ```

### 4. Withdraw Funds
- **POST /api/groups/{groupId}/withdraw**  
  Body:  
  ```json
  {
      "amount": 50,
      "memberId": "User's ID"
  }
  ```

### 5. Track Loans
- **GET /api/groups/{groupId}/loans**  

## Authentication
The API uses token-based authentication. Each request must include a token in the header:

```
Authorization: Bearer {token}
```

## Conclusion
The Green Moon Savings Group API provides a robust solution for managing savings groups. Proper usage will ensure an efficient and organized savings community.