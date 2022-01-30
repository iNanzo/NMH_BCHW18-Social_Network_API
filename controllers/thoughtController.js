const { Thought, User } = require("../models")

module.exports = {
    // Get all Thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get singular Thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            // .select('-__v')
            // .populate('reactions')
            .then((thought) =>
                !thought
                    ?res.status(404).json({ message: "Thought with ID not found" })
                    :res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // Create new Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true });
            })
            .then((user) =>
                !user
                    ?res.status(404).json({ message: "User with ID not found" })
                    :res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Update existing Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thought },
            { thoughtText: req.body.thoughtText, },
            { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Delete existing Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then(async(thought) => {
                await User.findOneAndUpdate(
                    { username: thought.username },
                    { $pull: { thoughts: thought.id } },
                    { new: true })
            })
            .then(() => res.json({ message: "Thought and connected users have been deleted" }))
            .catch((err) => res.status(500).json(err));
    },
    // Create new Reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true })
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete existing Reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {_id: req.body.reactionId}  } },
            { new: true })
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
}