# Out2Gether App

<img width="300" height="300" alt="Out2Gether_Logo" src="https://github.com/user-attachments/assets/d8b5f870-c183-40b0-a3d0-44fc14652c62" />


## 🔎Overview

Have you ever had a conversation with your partner about what to do for date night? Is the answer usually, “I don’t know. What do you want to do?” Out2Gether is an app geared towards couples who are in search of fun date ideas for when they want to go out… together! 

This platform would allow businesses to advertise their events, which can either be free or paid. If the users want to attend a paid event, they can purchase tickets straight from the app. All tickets are priced for couples, meaning if one event is added to the cart, that is the equivalent of adding two tickets. Users can browse events nearby or in other cities across the United States, and they can even favorite the ones they like. For the simplicity of this project, all registered and logged in users can post an event. 

## ⚙️Core Features

- Filter events by date, category (i.e. music, sports, art, etc.), and price.
- Add tickets to cart and “checkout”.
- By implementing a geolocation API, users can browse through events nearby or in other cities across the United States.
- Favorite events and save for later.
- Post, edit, and delete events.


## 💻Tech Stack

- Frontend(Client): React
- Backend(Server): Node.js server with Express.js framework
- Database: PostgresSQL relational database

## 🏗Architecture Overview

Lucidchart API Mapping (see [backend repository](https://github.com/LBuddyBoy/out2gether-backend) for more details):

<img width="842" height="562" alt="Screenshot 2025-08-02 at 5 03 07 PM" src="https://github.com/user-attachments/assets/17fd5b4e-9274-45db-8d27-91fbe5c5cc3c" />


Figma Wireframe:

<img width="868" height="495" alt="Screenshot 2025-08-02 at 5 04 33 PM" src="https://github.com/user-attachments/assets/4f6d8ee4-ee6f-46d8-b6a6-90330878d354" />


File Structure:

- scr/
     - accounts/
     - api/
     - assets/
     - auth/
     - checkout/
     - components/
     - events/
     - favorites/
     - hooks/
     - layout/
- App.jsx
- App.css
- Error404.jsx
- index.css
- main.jsx
- index.html
