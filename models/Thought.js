const { Schema, Types, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: 
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: 
    {
      type: String,
      required: true,
      ref: 'user'
    },
    createdAt: 
    {
      type: Date,
      default: Date.now,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);
module.exports = Thought;