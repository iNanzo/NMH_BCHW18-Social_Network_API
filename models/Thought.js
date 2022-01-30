const { Schema, Types, model } = require("mongoose");
const Reaction = require("./Reaction");
const dayjs =  require("../utils/date.js"); 

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
      ref: "user"
    },
    date: 
    {
      type: Date,
      default: Date.now,
      get: dayjs.dateFormat,
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

const Thought = model("thought", thoughtSchema);
module.exports = Thought;