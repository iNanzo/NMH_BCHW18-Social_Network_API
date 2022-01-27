const router = require('express').Router();
const 
{
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
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

module.exports = router;