const connection = require('../config/connection');
const { User, Thought, } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users and Thoughts
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const thoughts = [];
  const reactions = [];

  for (let i = 0; i < 5; i++) {
    let user =
    {
      username: getRandomName(),
      email: `${user.username}${i}@email.com`
    }
    users.push(user)
  }

  for (let i = 0; i < 5; i++) {
    let thought =
    {
      thoughtText: getRandomThought(),
      username: getRandomName(),
      date: Date()
    }
    thoughts.push(thought)
  }

  for (let i = 0; i < 10; i++) {
    let reaction =
    {
      reactionBody: getRandomThought(),
      username: getRandomName(),
      date: Date()
    }
    reactions.push(reaction)
  }

  // Add to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // // Log out the seed data to indicate what should appear in the database
  // console.table(users);
  // console.table(prompts);
  // console.info('Seeding complete! 🌱');
  // process.exit(0);
});
