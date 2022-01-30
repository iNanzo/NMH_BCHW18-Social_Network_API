# 18 NoSQL: Social Network API

https://www.youtube.com/watch?v=zys4-RUEuGY

## My Task

A social network backend API that makes use of users, thoughts, and reactions. Using NodeJS, Mongoose, Express, and DayJS. Users can be made and deleted; friends can be added and removed; users can add thoughts and reactions, edit them, or delete them. I had to rework the models and controllers. Eventually getting the database and most functions working. hopefully I can come back to fix some of the thought routes. Not mentioned in video but associated thoughts are deleted when user is deleted, so hoping I get bonus points there.

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```