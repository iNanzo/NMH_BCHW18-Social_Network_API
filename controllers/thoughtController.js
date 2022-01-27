const { Thought, User } = require('../models')

module.exports = {
    // Get all Thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // Get singular Thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .select('-__v')
            // .populate('friends')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'User with ID not found' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create new Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Update existing Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((thought) =>
              !thought
                ? res.status(404).json({ message: 'Thought with ID not found' })
                : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete existing Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((thought) =>
                !thought
                ? res.status(404).json({ message: 'Thought with ID not found' })
                : User.deleteMany({ _id: { $in: thought.users } })
            )
            .then(() => res.json({ message: 'Thought and users deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
}