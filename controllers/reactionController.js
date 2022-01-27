const { Reaction, Thought, User } = require('../models')

module.exports = {
    /*
    // Get all Reactions
    getReactions(req, res) {
        Reaction.find()
            .then((reactions) => res.json(reactions))
            .catch((err) => res.status(500).json(err));
    },
    // Get singular Reaction
    getSingleReaction(req, res) {
        Reaction.findOne({ _id: req.params.id })
            .select('-__v')
            // .populate('friends')
            .then((reaction) =>
                !reaction
                    ? res.status(404).json({ message: 'User with ID not found' })
                    : res.json(reaction))
            .catch((err) => res.status(500).json(err));
    },
    // Create new Reaction
    createReaction(req, res) {
        Reactions.create(req.body)
        .then((reaction) => res.json(reaction))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // Delete existing Reaction
    deleteReaction(req, res) {
        Reaction.findOneAndDelete(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((reaction) =>
                !reaction
                ? res.status(404).json({ message: 'Reaction with ID not found' })
                : User.deleteMany({ _id: { $in: reaction.users } }))
            .then(() => res.json({ message: 'Reaction and users deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    */
}