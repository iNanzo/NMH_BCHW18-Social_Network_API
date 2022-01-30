const router = require('express').Router();
const 
{
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController')

/*
GET all Thoughts
POST new Thought
*/
router.route('/').get(getThoughts).post(createThought);

/* 
GET existing Thought through id
PUT update existing Thought
DELETE existing Thought
*/
router.route(':_id').get(getSingleThought).put(updateThought).delete(deleteThought);

/* 
POST new Reaction
DELETE existing Reaction
*/
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction); 

module.exports = router;