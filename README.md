# SeamlessX - Elevating Digital Customer Experience

A React-Native application to engage customers based on their location and promote bank offerings via various channels like - real time app notifications and email.

## Features
- Provides users with bank-collaborated offers based on their location via an API.
- Allows users to subscribe to AWS email notifications for receiving the latest offers.
- Implements a microservices architecture for improved scalability and performance.
- Utilizes a serverless framework, specifically the AWS Lambda-based Serverless Application Model.
- Adopts a pay-as-you-go model, where resources are billed based on actual usage during execution.

## Technologies Used:
- User Interface: React Native
- Backend: Node.js (REST Based APIs), Serverless Framework 
- Cloud Technologies: AWS (Lambda Functions, EventBridges, CloudFront)
- Database: MongoDB

## Backend Architecture:
<div align="center">
  <img width="530" alt="Screenshot 2023-06-29 at 9 21 23 AM" src="https://github.com/sandeepB3/SeamlessX/assets/107111616/7d68a028-4f55-4301-9560-558290c3bfbe">
</div>

## Screenshots

### User Interface and Screens
<div align="center">
  <img width="302" alt="Screenshot 2023-06-29 at 9 28 50 AM" src="https://github.com/sandeepB3/SeamlessX/assets/107111616/e3bb322d-c5eb-4d71-9dea-18adf38435fc">
</div>

### Location Change - Backend
<div align="center">
  <img src="https://github.com/sandeepB3/SeamlessX/assets/107111616/43358ee0-13fb-4ffe-b90f-fe82780b742d">
</div>

### Offer Fetching - Backend
<div align="center">
    <img src="https://github.com/sandeepB3/SeamlessX/assets/107111616/2488091c-d7b5-45b8-b10e-137c217c592d">
</div>

### Email Notify Service
<div align="center">
  <img src="https://github.com/sandeepB3/SeamlessX/assets/107111616/96f7f9ff-3f21-4527-921e-18a603cf0181">
</div>

## Future Scope
- Integrating smart suggest to customers, based on their preferences
- Enhancing Customer Security and Authorization with AWS Cognito
- Shifting our data store to DynamoDB as it works well with our tech stack and has some exceptional use cases.
- Adding transaction based triggers and events to elevate customer experience 
